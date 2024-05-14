
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Stakeholder
 * 
 */
export type Stakeholder = $Result.DefaultSelection<Prisma.$StakeholderPayload>
/**
 * Model TractRecord
 * 
 */
export type TractRecord = $Result.DefaultSelection<Prisma.$TractRecordPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model PackageType
 * 
 */
export type PackageType = $Result.DefaultSelection<Prisma.$PackageTypePayload>
/**
 * Model PackageItem
 * 
 */
export type PackageItem = $Result.DefaultSelection<Prisma.$PackageItemPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.stakeholder`: Exposes CRUD operations for the **Stakeholder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stakeholders
    * const stakeholders = await prisma.stakeholder.findMany()
    * ```
    */
  get stakeholder(): Prisma.StakeholderDelegate<ExtArgs>;

  /**
   * `prisma.tractRecord`: Exposes CRUD operations for the **TractRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TractRecords
    * const tractRecords = await prisma.tractRecord.findMany()
    * ```
    */
  get tractRecord(): Prisma.TractRecordDelegate<ExtArgs>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs>;

  /**
   * `prisma.packageType`: Exposes CRUD operations for the **PackageType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageTypes
    * const packageTypes = await prisma.packageType.findMany()
    * ```
    */
  get packageType(): Prisma.PackageTypeDelegate<ExtArgs>;

  /**
   * `prisma.packageItem`: Exposes CRUD operations for the **PackageItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageItems
    * const packageItems = await prisma.packageItem.findMany()
    * ```
    */
  get packageItem(): Prisma.PackageItemDelegate<ExtArgs>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    Stakeholder: 'Stakeholder',
    TractRecord: 'TractRecord',
    Delivery: 'Delivery',
    Package: 'Package',
    PackageType: 'PackageType',
    PackageItem: 'PackageItem',
    Item: 'Item'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'project' | 'stakeholder' | 'tractRecord' | 'delivery' | 'package' | 'packageType' | 'packageItem' | 'item'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Stakeholder: {
        payload: Prisma.$StakeholderPayload<ExtArgs>
        fields: Prisma.StakeholderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StakeholderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StakeholderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          findFirst: {
            args: Prisma.StakeholderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StakeholderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          findMany: {
            args: Prisma.StakeholderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>[]
          }
          create: {
            args: Prisma.StakeholderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          createMany: {
            args: Prisma.StakeholderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StakeholderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          update: {
            args: Prisma.StakeholderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          deleteMany: {
            args: Prisma.StakeholderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StakeholderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StakeholderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          aggregate: {
            args: Prisma.StakeholderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStakeholder>
          }
          groupBy: {
            args: Prisma.StakeholderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StakeholderGroupByOutputType>[]
          }
          count: {
            args: Prisma.StakeholderCountArgs<ExtArgs>,
            result: $Utils.Optional<StakeholderCountAggregateOutputType> | number
          }
        }
      }
      TractRecord: {
        payload: Prisma.$TractRecordPayload<ExtArgs>
        fields: Prisma.TractRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TractRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TractRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TractRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TractRecordPayload>
          }
          findFirst: {
            args: Prisma.TractRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TractRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TractRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TractRecordPayload>
          }
          findMany: {
            args: Prisma.TractRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TractRecordPayload>[]
          }
          create: {
            args: Prisma.TractRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TractRecordPayload>
          }
          createMany: {
            args: Prisma.TractRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TractRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TractRecordPayload>
          }
          update: {
            args: Prisma.TractRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TractRecordPayload>
          }
          deleteMany: {
            args: Prisma.TractRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TractRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TractRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TractRecordPayload>
          }
          aggregate: {
            args: Prisma.TractRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTractRecord>
          }
          groupBy: {
            args: Prisma.TractRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TractRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TractRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<TractRecordCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>,
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>,
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      PackageType: {
        payload: Prisma.$PackageTypePayload<ExtArgs>
        fields: Prisma.PackageTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageTypePayload>
          }
          findFirst: {
            args: Prisma.PackageTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageTypePayload>
          }
          findMany: {
            args: Prisma.PackageTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageTypePayload>[]
          }
          create: {
            args: Prisma.PackageTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageTypePayload>
          }
          createMany: {
            args: Prisma.PackageTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PackageTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageTypePayload>
          }
          update: {
            args: Prisma.PackageTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageTypePayload>
          }
          deleteMany: {
            args: Prisma.PackageTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PackageTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PackageTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageTypePayload>
          }
          aggregate: {
            args: Prisma.PackageTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePackageType>
          }
          groupBy: {
            args: Prisma.PackageTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PackageTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<PackageTypeCountAggregateOutputType> | number
          }
        }
      }
      PackageItem: {
        payload: Prisma.$PackageItemPayload<ExtArgs>
        fields: Prisma.PackageItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageItemPayload>
          }
          findFirst: {
            args: Prisma.PackageItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageItemPayload>
          }
          findMany: {
            args: Prisma.PackageItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageItemPayload>[]
          }
          create: {
            args: Prisma.PackageItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageItemPayload>
          }
          createMany: {
            args: Prisma.PackageItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PackageItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageItemPayload>
          }
          update: {
            args: Prisma.PackageItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageItemPayload>
          }
          deleteMany: {
            args: Prisma.PackageItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PackageItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PackageItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackageItemPayload>
          }
          aggregate: {
            args: Prisma.PackageItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePackageItem>
          }
          groupBy: {
            args: Prisma.PackageItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PackageItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageItemCountArgs<ExtArgs>,
            result: $Utils.Optional<PackageItemCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    stakeholders: number
    deliveries: number
    items: number
    PackageType: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stakeholders?: boolean | ProjectCountOutputTypeCountStakeholdersArgs
    deliveries?: boolean | ProjectCountOutputTypeCountDeliveriesArgs
    items?: boolean | ProjectCountOutputTypeCountItemsArgs
    PackageType?: boolean | ProjectCountOutputTypeCountPackageTypeArgs
  }

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountStakeholdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StakeholderWhereInput
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPackageTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageTypeWhereInput
  }



  /**
   * Count Type StakeholderCountOutputType
   */

  export type StakeholderCountOutputType = {
    tractRecords: number
  }

  export type StakeholderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tractRecords?: boolean | StakeholderCountOutputTypeCountTractRecordsArgs
  }

  // Custom InputTypes

  /**
   * StakeholderCountOutputType without action
   */
  export type StakeholderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StakeholderCountOutputType
     */
    select?: StakeholderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StakeholderCountOutputType without action
   */
  export type StakeholderCountOutputTypeCountTractRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TractRecordWhereInput
  }



  /**
   * Count Type DeliveryCountOutputType
   */

  export type DeliveryCountOutputType = {
    packages: number
  }

  export type DeliveryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packages?: boolean | DeliveryCountOutputTypeCountPackagesArgs
  }

  // Custom InputTypes

  /**
   * DeliveryCountOutputType without action
   */
  export type DeliveryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryCountOutputType
     */
    select?: DeliveryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DeliveryCountOutputType without action
   */
  export type DeliveryCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }



  /**
   * Count Type PackageTypeCountOutputType
   */

  export type PackageTypeCountOutputType = {
    packages: number
    items: number
  }

  export type PackageTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packages?: boolean | PackageTypeCountOutputTypeCountPackagesArgs
    items?: boolean | PackageTypeCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes

  /**
   * PackageTypeCountOutputType without action
   */
  export type PackageTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageTypeCountOutputType
     */
    select?: PackageTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PackageTypeCountOutputType without action
   */
  export type PackageTypeCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }


  /**
   * PackageTypeCountOutputType without action
   */
  export type PackageTypeCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageItemWhereInput
  }



  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    packageItems: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packageItems?: boolean | ItemCountOutputTypeCountPackageItemsArgs
  }

  // Custom InputTypes

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountPackageItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageItemWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    isAdmin: boolean | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    isAdmin: boolean | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    isAdmin: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    isAdmin?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    isAdmin?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    isAdmin?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    isAdmin: boolean
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAdmin?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    isAdmin?: boolean
    username?: boolean
    password?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isAdmin: boolean
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    year: number | null
    notes: string | null
    surveyLink: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    year: number | null
    notes: string | null
    surveyLink: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    year: number
    notes: number
    surveyLink: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    year?: true
    notes?: true
    surveyLink?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    year?: true
    notes?: true
    surveyLink?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    year?: true
    notes?: true
    surveyLink?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    year: number
    notes: string
    surveyLink: string
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    notes?: boolean
    surveyLink?: boolean
    stakeholders?: boolean | Project$stakeholdersArgs<ExtArgs>
    deliveries?: boolean | Project$deliveriesArgs<ExtArgs>
    items?: boolean | Project$itemsArgs<ExtArgs>
    PackageType?: boolean | Project$PackageTypeArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    year?: boolean
    notes?: boolean
    surveyLink?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stakeholders?: boolean | Project$stakeholdersArgs<ExtArgs>
    deliveries?: boolean | Project$deliveriesArgs<ExtArgs>
    items?: boolean | Project$itemsArgs<ExtArgs>
    PackageType?: boolean | Project$PackageTypeArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      stakeholders: Prisma.$StakeholderPayload<ExtArgs>[]
      deliveries: Prisma.$DeliveryPayload<ExtArgs>[]
      items: Prisma.$ItemPayload<ExtArgs>[]
      PackageType: Prisma.$PackageTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      year: number
      notes: string
      surveyLink: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }


  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    stakeholders<T extends Project$stakeholdersArgs<ExtArgs> = {}>(args?: Subset<T, Project$stakeholdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'findMany'> | Null>;

    deliveries<T extends Project$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Project$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findMany'> | Null>;

    items<T extends Project$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Project$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    PackageType<T extends Project$PackageTypeArgs<ExtArgs> = {}>(args?: Subset<T, Project$PackageTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly year: FieldRef<"Project", 'Int'>
    readonly notes: FieldRef<"Project", 'String'>
    readonly surveyLink: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }


  /**
   * Project.stakeholders
   */
  export type Project$stakeholdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    where?: StakeholderWhereInput
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    cursor?: StakeholderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StakeholderScalarFieldEnum | StakeholderScalarFieldEnum[]
  }


  /**
   * Project.deliveries
   */
  export type Project$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }


  /**
   * Project.items
   */
  export type Project$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Project.PackageType
   */
  export type Project$PackageTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    where?: PackageTypeWhereInput
    orderBy?: PackageTypeOrderByWithRelationInput | PackageTypeOrderByWithRelationInput[]
    cursor?: PackageTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageTypeScalarFieldEnum | PackageTypeScalarFieldEnum[]
  }


  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
  }



  /**
   * Model Stakeholder
   */

  export type AggregateStakeholder = {
    _count: StakeholderCountAggregateOutputType | null
    _avg: StakeholderAvgAggregateOutputType | null
    _sum: StakeholderSumAggregateOutputType | null
    _min: StakeholderMinAggregateOutputType | null
    _max: StakeholderMaxAggregateOutputType | null
  }

  export type StakeholderAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    packageId: number | null
  }

  export type StakeholderSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    packageId: number | null
  }

  export type StakeholderMinAggregateOutputType = {
    id: number | null
    name: string | null
    streetAddress: string | null
    mailingAddress: string | null
    phoneNumber: string | null
    isPerson: string | null
    stakeholderComments: string | null
    stakeholderStatus: string | null
    contacted: string | null
    consultation: string | null
    attempts: string | null
    email: string | null
    followUp: string | null
    projectId: number | null
    packageId: number | null
  }

  export type StakeholderMaxAggregateOutputType = {
    id: number | null
    name: string | null
    streetAddress: string | null
    mailingAddress: string | null
    phoneNumber: string | null
    isPerson: string | null
    stakeholderComments: string | null
    stakeholderStatus: string | null
    contacted: string | null
    consultation: string | null
    attempts: string | null
    email: string | null
    followUp: string | null
    projectId: number | null
    packageId: number | null
  }

  export type StakeholderCountAggregateOutputType = {
    id: number
    name: number
    streetAddress: number
    mailingAddress: number
    phoneNumber: number
    isPerson: number
    stakeholderComments: number
    stakeholderStatus: number
    contacted: number
    consultation: number
    attempts: number
    email: number
    followUp: number
    projectId: number
    packageId: number
    _all: number
  }


  export type StakeholderAvgAggregateInputType = {
    id?: true
    projectId?: true
    packageId?: true
  }

  export type StakeholderSumAggregateInputType = {
    id?: true
    projectId?: true
    packageId?: true
  }

  export type StakeholderMinAggregateInputType = {
    id?: true
    name?: true
    streetAddress?: true
    mailingAddress?: true
    phoneNumber?: true
    isPerson?: true
    stakeholderComments?: true
    stakeholderStatus?: true
    contacted?: true
    consultation?: true
    attempts?: true
    email?: true
    followUp?: true
    projectId?: true
    packageId?: true
  }

  export type StakeholderMaxAggregateInputType = {
    id?: true
    name?: true
    streetAddress?: true
    mailingAddress?: true
    phoneNumber?: true
    isPerson?: true
    stakeholderComments?: true
    stakeholderStatus?: true
    contacted?: true
    consultation?: true
    attempts?: true
    email?: true
    followUp?: true
    projectId?: true
    packageId?: true
  }

  export type StakeholderCountAggregateInputType = {
    id?: true
    name?: true
    streetAddress?: true
    mailingAddress?: true
    phoneNumber?: true
    isPerson?: true
    stakeholderComments?: true
    stakeholderStatus?: true
    contacted?: true
    consultation?: true
    attempts?: true
    email?: true
    followUp?: true
    projectId?: true
    packageId?: true
    _all?: true
  }

  export type StakeholderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stakeholder to aggregate.
     */
    where?: StakeholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakeholders to fetch.
     */
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StakeholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakeholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakeholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stakeholders
    **/
    _count?: true | StakeholderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StakeholderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StakeholderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StakeholderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StakeholderMaxAggregateInputType
  }

  export type GetStakeholderAggregateType<T extends StakeholderAggregateArgs> = {
        [P in keyof T & keyof AggregateStakeholder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStakeholder[P]>
      : GetScalarType<T[P], AggregateStakeholder[P]>
  }




  export type StakeholderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StakeholderWhereInput
    orderBy?: StakeholderOrderByWithAggregationInput | StakeholderOrderByWithAggregationInput[]
    by: StakeholderScalarFieldEnum[] | StakeholderScalarFieldEnum
    having?: StakeholderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StakeholderCountAggregateInputType | true
    _avg?: StakeholderAvgAggregateInputType
    _sum?: StakeholderSumAggregateInputType
    _min?: StakeholderMinAggregateInputType
    _max?: StakeholderMaxAggregateInputType
  }

  export type StakeholderGroupByOutputType = {
    id: number
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    projectId: number
    packageId: number | null
    _count: StakeholderCountAggregateOutputType | null
    _avg: StakeholderAvgAggregateOutputType | null
    _sum: StakeholderSumAggregateOutputType | null
    _min: StakeholderMinAggregateOutputType | null
    _max: StakeholderMaxAggregateOutputType | null
  }

  type GetStakeholderGroupByPayload<T extends StakeholderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StakeholderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StakeholderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StakeholderGroupByOutputType[P]>
            : GetScalarType<T[P], StakeholderGroupByOutputType[P]>
        }
      >
    >


  export type StakeholderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    streetAddress?: boolean
    mailingAddress?: boolean
    phoneNumber?: boolean
    isPerson?: boolean
    stakeholderComments?: boolean
    stakeholderStatus?: boolean
    contacted?: boolean
    consultation?: boolean
    attempts?: boolean
    email?: boolean
    followUp?: boolean
    projectId?: boolean
    packageId?: boolean
    projects?: boolean | ProjectDefaultArgs<ExtArgs>
    tractRecords?: boolean | Stakeholder$tractRecordsArgs<ExtArgs>
    package?: boolean | Stakeholder$packageArgs<ExtArgs>
    _count?: boolean | StakeholderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stakeholder"]>

  export type StakeholderSelectScalar = {
    id?: boolean
    name?: boolean
    streetAddress?: boolean
    mailingAddress?: boolean
    phoneNumber?: boolean
    isPerson?: boolean
    stakeholderComments?: boolean
    stakeholderStatus?: boolean
    contacted?: boolean
    consultation?: boolean
    attempts?: boolean
    email?: boolean
    followUp?: boolean
    projectId?: boolean
    packageId?: boolean
  }

  export type StakeholderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectDefaultArgs<ExtArgs>
    tractRecords?: boolean | Stakeholder$tractRecordsArgs<ExtArgs>
    package?: boolean | Stakeholder$packageArgs<ExtArgs>
    _count?: boolean | StakeholderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StakeholderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stakeholder"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>
      tractRecords: Prisma.$TractRecordPayload<ExtArgs>[]
      package: Prisma.$PackagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      streetAddress: string
      mailingAddress: string
      phoneNumber: string
      isPerson: string
      stakeholderComments: string
      stakeholderStatus: string
      contacted: string
      consultation: string
      attempts: string
      email: string
      followUp: string
      projectId: number
      packageId: number | null
    }, ExtArgs["result"]["stakeholder"]>
    composites: {}
  }


  type StakeholderGetPayload<S extends boolean | null | undefined | StakeholderDefaultArgs> = $Result.GetResult<Prisma.$StakeholderPayload, S>

  type StakeholderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StakeholderFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StakeholderCountAggregateInputType | true
    }

  export interface StakeholderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stakeholder'], meta: { name: 'Stakeholder' } }
    /**
     * Find zero or one Stakeholder that matches the filter.
     * @param {StakeholderFindUniqueArgs} args - Arguments to find a Stakeholder
     * @example
     * // Get one Stakeholder
     * const stakeholder = await prisma.stakeholder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StakeholderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StakeholderFindUniqueArgs<ExtArgs>>
    ): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Stakeholder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StakeholderFindUniqueOrThrowArgs} args - Arguments to find a Stakeholder
     * @example
     * // Get one Stakeholder
     * const stakeholder = await prisma.stakeholder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StakeholderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StakeholderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Stakeholder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderFindFirstArgs} args - Arguments to find a Stakeholder
     * @example
     * // Get one Stakeholder
     * const stakeholder = await prisma.stakeholder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StakeholderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StakeholderFindFirstArgs<ExtArgs>>
    ): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Stakeholder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderFindFirstOrThrowArgs} args - Arguments to find a Stakeholder
     * @example
     * // Get one Stakeholder
     * const stakeholder = await prisma.stakeholder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StakeholderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StakeholderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stakeholders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stakeholders
     * const stakeholders = await prisma.stakeholder.findMany()
     * 
     * // Get first 10 Stakeholders
     * const stakeholders = await prisma.stakeholder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stakeholderWithIdOnly = await prisma.stakeholder.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StakeholderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StakeholderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Stakeholder.
     * @param {StakeholderCreateArgs} args - Arguments to create a Stakeholder.
     * @example
     * // Create one Stakeholder
     * const Stakeholder = await prisma.stakeholder.create({
     *   data: {
     *     // ... data to create a Stakeholder
     *   }
     * })
     * 
    **/
    create<T extends StakeholderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StakeholderCreateArgs<ExtArgs>>
    ): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stakeholders.
     *     @param {StakeholderCreateManyArgs} args - Arguments to create many Stakeholders.
     *     @example
     *     // Create many Stakeholders
     *     const stakeholder = await prisma.stakeholder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StakeholderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StakeholderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stakeholder.
     * @param {StakeholderDeleteArgs} args - Arguments to delete one Stakeholder.
     * @example
     * // Delete one Stakeholder
     * const Stakeholder = await prisma.stakeholder.delete({
     *   where: {
     *     // ... filter to delete one Stakeholder
     *   }
     * })
     * 
    **/
    delete<T extends StakeholderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StakeholderDeleteArgs<ExtArgs>>
    ): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Stakeholder.
     * @param {StakeholderUpdateArgs} args - Arguments to update one Stakeholder.
     * @example
     * // Update one Stakeholder
     * const stakeholder = await prisma.stakeholder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StakeholderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StakeholderUpdateArgs<ExtArgs>>
    ): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stakeholders.
     * @param {StakeholderDeleteManyArgs} args - Arguments to filter Stakeholders to delete.
     * @example
     * // Delete a few Stakeholders
     * const { count } = await prisma.stakeholder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StakeholderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StakeholderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stakeholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stakeholders
     * const stakeholder = await prisma.stakeholder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StakeholderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StakeholderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stakeholder.
     * @param {StakeholderUpsertArgs} args - Arguments to update or create a Stakeholder.
     * @example
     * // Update or create a Stakeholder
     * const stakeholder = await prisma.stakeholder.upsert({
     *   create: {
     *     // ... data to create a Stakeholder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stakeholder we want to update
     *   }
     * })
    **/
    upsert<T extends StakeholderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StakeholderUpsertArgs<ExtArgs>>
    ): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stakeholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderCountArgs} args - Arguments to filter Stakeholders to count.
     * @example
     * // Count the number of Stakeholders
     * const count = await prisma.stakeholder.count({
     *   where: {
     *     // ... the filter for the Stakeholders we want to count
     *   }
     * })
    **/
    count<T extends StakeholderCountArgs>(
      args?: Subset<T, StakeholderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StakeholderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stakeholder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StakeholderAggregateArgs>(args: Subset<T, StakeholderAggregateArgs>): Prisma.PrismaPromise<GetStakeholderAggregateType<T>>

    /**
     * Group by Stakeholder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StakeholderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StakeholderGroupByArgs['orderBy'] }
        : { orderBy?: StakeholderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StakeholderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStakeholderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stakeholder model
   */
  readonly fields: StakeholderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stakeholder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StakeholderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    projects<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    tractRecords<T extends Stakeholder$tractRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Stakeholder$tractRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'findMany'> | Null>;

    package<T extends Stakeholder$packageArgs<ExtArgs> = {}>(args?: Subset<T, Stakeholder$packageArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Stakeholder model
   */ 
  interface StakeholderFieldRefs {
    readonly id: FieldRef<"Stakeholder", 'Int'>
    readonly name: FieldRef<"Stakeholder", 'String'>
    readonly streetAddress: FieldRef<"Stakeholder", 'String'>
    readonly mailingAddress: FieldRef<"Stakeholder", 'String'>
    readonly phoneNumber: FieldRef<"Stakeholder", 'String'>
    readonly isPerson: FieldRef<"Stakeholder", 'String'>
    readonly stakeholderComments: FieldRef<"Stakeholder", 'String'>
    readonly stakeholderStatus: FieldRef<"Stakeholder", 'String'>
    readonly contacted: FieldRef<"Stakeholder", 'String'>
    readonly consultation: FieldRef<"Stakeholder", 'String'>
    readonly attempts: FieldRef<"Stakeholder", 'String'>
    readonly email: FieldRef<"Stakeholder", 'String'>
    readonly followUp: FieldRef<"Stakeholder", 'String'>
    readonly projectId: FieldRef<"Stakeholder", 'Int'>
    readonly packageId: FieldRef<"Stakeholder", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Stakeholder findUnique
   */
  export type StakeholderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholder to fetch.
     */
    where: StakeholderWhereUniqueInput
  }


  /**
   * Stakeholder findUniqueOrThrow
   */
  export type StakeholderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholder to fetch.
     */
    where: StakeholderWhereUniqueInput
  }


  /**
   * Stakeholder findFirst
   */
  export type StakeholderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholder to fetch.
     */
    where?: StakeholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakeholders to fetch.
     */
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stakeholders.
     */
    cursor?: StakeholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakeholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakeholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stakeholders.
     */
    distinct?: StakeholderScalarFieldEnum | StakeholderScalarFieldEnum[]
  }


  /**
   * Stakeholder findFirstOrThrow
   */
  export type StakeholderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholder to fetch.
     */
    where?: StakeholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakeholders to fetch.
     */
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stakeholders.
     */
    cursor?: StakeholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakeholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakeholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stakeholders.
     */
    distinct?: StakeholderScalarFieldEnum | StakeholderScalarFieldEnum[]
  }


  /**
   * Stakeholder findMany
   */
  export type StakeholderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholders to fetch.
     */
    where?: StakeholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakeholders to fetch.
     */
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stakeholders.
     */
    cursor?: StakeholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakeholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakeholders.
     */
    skip?: number
    distinct?: StakeholderScalarFieldEnum | StakeholderScalarFieldEnum[]
  }


  /**
   * Stakeholder create
   */
  export type StakeholderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * The data needed to create a Stakeholder.
     */
    data: XOR<StakeholderCreateInput, StakeholderUncheckedCreateInput>
  }


  /**
   * Stakeholder createMany
   */
  export type StakeholderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stakeholders.
     */
    data: StakeholderCreateManyInput | StakeholderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Stakeholder update
   */
  export type StakeholderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * The data needed to update a Stakeholder.
     */
    data: XOR<StakeholderUpdateInput, StakeholderUncheckedUpdateInput>
    /**
     * Choose, which Stakeholder to update.
     */
    where: StakeholderWhereUniqueInput
  }


  /**
   * Stakeholder updateMany
   */
  export type StakeholderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stakeholders.
     */
    data: XOR<StakeholderUpdateManyMutationInput, StakeholderUncheckedUpdateManyInput>
    /**
     * Filter which Stakeholders to update
     */
    where?: StakeholderWhereInput
  }


  /**
   * Stakeholder upsert
   */
  export type StakeholderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * The filter to search for the Stakeholder to update in case it exists.
     */
    where: StakeholderWhereUniqueInput
    /**
     * In case the Stakeholder found by the `where` argument doesn't exist, create a new Stakeholder with this data.
     */
    create: XOR<StakeholderCreateInput, StakeholderUncheckedCreateInput>
    /**
     * In case the Stakeholder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StakeholderUpdateInput, StakeholderUncheckedUpdateInput>
  }


  /**
   * Stakeholder delete
   */
  export type StakeholderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter which Stakeholder to delete.
     */
    where: StakeholderWhereUniqueInput
  }


  /**
   * Stakeholder deleteMany
   */
  export type StakeholderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stakeholders to delete
     */
    where?: StakeholderWhereInput
  }


  /**
   * Stakeholder.tractRecords
   */
  export type Stakeholder$tractRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    where?: TractRecordWhereInput
    orderBy?: TractRecordOrderByWithRelationInput | TractRecordOrderByWithRelationInput[]
    cursor?: TractRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TractRecordScalarFieldEnum | TractRecordScalarFieldEnum[]
  }


  /**
   * Stakeholder.package
   */
  export type Stakeholder$packageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
  }


  /**
   * Stakeholder without action
   */
  export type StakeholderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StakeholderInclude<ExtArgs> | null
  }



  /**
   * Model TractRecord
   */

  export type AggregateTractRecord = {
    _count: TractRecordCountAggregateOutputType | null
    _avg: TractRecordAvgAggregateOutputType | null
    _sum: TractRecordSumAggregateOutputType | null
    _min: TractRecordMinAggregateOutputType | null
    _max: TractRecordMaxAggregateOutputType | null
  }

  export type TractRecordAvgAggregateOutputType = {
    id: number | null
    tract: number | null
    position: number | null
    occupants: number | null
    stakeholderId: number | null
  }

  export type TractRecordSumAggregateOutputType = {
    id: number | null
    tract: number | null
    position: number | null
    occupants: number | null
    stakeholderId: number | null
  }

  export type TractRecordMinAggregateOutputType = {
    id: number | null
    tract: number | null
    position: number | null
    pin: string | null
    interest: string | null
    structure: string | null
    occupants: number | null
    worksLand: string | null
    tractComments: string | null
    pipelineStatus: string | null
    commodity: string | null
    pageNumber: string | null
    keepdelete: string | null
    stakeholderId: number | null
  }

  export type TractRecordMaxAggregateOutputType = {
    id: number | null
    tract: number | null
    position: number | null
    pin: string | null
    interest: string | null
    structure: string | null
    occupants: number | null
    worksLand: string | null
    tractComments: string | null
    pipelineStatus: string | null
    commodity: string | null
    pageNumber: string | null
    keepdelete: string | null
    stakeholderId: number | null
  }

  export type TractRecordCountAggregateOutputType = {
    id: number
    tract: number
    position: number
    pin: number
    interest: number
    structure: number
    occupants: number
    worksLand: number
    tractComments: number
    pipelineStatus: number
    commodity: number
    pageNumber: number
    keepdelete: number
    stakeholderId: number
    _all: number
  }


  export type TractRecordAvgAggregateInputType = {
    id?: true
    tract?: true
    position?: true
    occupants?: true
    stakeholderId?: true
  }

  export type TractRecordSumAggregateInputType = {
    id?: true
    tract?: true
    position?: true
    occupants?: true
    stakeholderId?: true
  }

  export type TractRecordMinAggregateInputType = {
    id?: true
    tract?: true
    position?: true
    pin?: true
    interest?: true
    structure?: true
    occupants?: true
    worksLand?: true
    tractComments?: true
    pipelineStatus?: true
    commodity?: true
    pageNumber?: true
    keepdelete?: true
    stakeholderId?: true
  }

  export type TractRecordMaxAggregateInputType = {
    id?: true
    tract?: true
    position?: true
    pin?: true
    interest?: true
    structure?: true
    occupants?: true
    worksLand?: true
    tractComments?: true
    pipelineStatus?: true
    commodity?: true
    pageNumber?: true
    keepdelete?: true
    stakeholderId?: true
  }

  export type TractRecordCountAggregateInputType = {
    id?: true
    tract?: true
    position?: true
    pin?: true
    interest?: true
    structure?: true
    occupants?: true
    worksLand?: true
    tractComments?: true
    pipelineStatus?: true
    commodity?: true
    pageNumber?: true
    keepdelete?: true
    stakeholderId?: true
    _all?: true
  }

  export type TractRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TractRecord to aggregate.
     */
    where?: TractRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TractRecords to fetch.
     */
    orderBy?: TractRecordOrderByWithRelationInput | TractRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TractRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TractRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TractRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TractRecords
    **/
    _count?: true | TractRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TractRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TractRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TractRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TractRecordMaxAggregateInputType
  }

  export type GetTractRecordAggregateType<T extends TractRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTractRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTractRecord[P]>
      : GetScalarType<T[P], AggregateTractRecord[P]>
  }




  export type TractRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TractRecordWhereInput
    orderBy?: TractRecordOrderByWithAggregationInput | TractRecordOrderByWithAggregationInput[]
    by: TractRecordScalarFieldEnum[] | TractRecordScalarFieldEnum
    having?: TractRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TractRecordCountAggregateInputType | true
    _avg?: TractRecordAvgAggregateInputType
    _sum?: TractRecordSumAggregateInputType
    _min?: TractRecordMinAggregateInputType
    _max?: TractRecordMaxAggregateInputType
  }

  export type TractRecordGroupByOutputType = {
    id: number
    tract: number
    position: number
    pin: string
    interest: string
    structure: string
    occupants: number
    worksLand: string
    tractComments: string
    pipelineStatus: string
    commodity: string
    pageNumber: string
    keepdelete: string
    stakeholderId: number
    _count: TractRecordCountAggregateOutputType | null
    _avg: TractRecordAvgAggregateOutputType | null
    _sum: TractRecordSumAggregateOutputType | null
    _min: TractRecordMinAggregateOutputType | null
    _max: TractRecordMaxAggregateOutputType | null
  }

  type GetTractRecordGroupByPayload<T extends TractRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TractRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TractRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TractRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TractRecordGroupByOutputType[P]>
        }
      >
    >


  export type TractRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tract?: boolean
    position?: boolean
    pin?: boolean
    interest?: boolean
    structure?: boolean
    occupants?: boolean
    worksLand?: boolean
    tractComments?: boolean
    pipelineStatus?: boolean
    commodity?: boolean
    pageNumber?: boolean
    keepdelete?: boolean
    stakeholderId?: boolean
    stakeholder?: boolean | StakeholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tractRecord"]>

  export type TractRecordSelectScalar = {
    id?: boolean
    tract?: boolean
    position?: boolean
    pin?: boolean
    interest?: boolean
    structure?: boolean
    occupants?: boolean
    worksLand?: boolean
    tractComments?: boolean
    pipelineStatus?: boolean
    commodity?: boolean
    pageNumber?: boolean
    keepdelete?: boolean
    stakeholderId?: boolean
  }

  export type TractRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stakeholder?: boolean | StakeholderDefaultArgs<ExtArgs>
  }


  export type $TractRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TractRecord"
    objects: {
      stakeholder: Prisma.$StakeholderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tract: number
      position: number
      pin: string
      interest: string
      structure: string
      occupants: number
      worksLand: string
      tractComments: string
      pipelineStatus: string
      commodity: string
      pageNumber: string
      keepdelete: string
      stakeholderId: number
    }, ExtArgs["result"]["tractRecord"]>
    composites: {}
  }


  type TractRecordGetPayload<S extends boolean | null | undefined | TractRecordDefaultArgs> = $Result.GetResult<Prisma.$TractRecordPayload, S>

  type TractRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TractRecordFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TractRecordCountAggregateInputType | true
    }

  export interface TractRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TractRecord'], meta: { name: 'TractRecord' } }
    /**
     * Find zero or one TractRecord that matches the filter.
     * @param {TractRecordFindUniqueArgs} args - Arguments to find a TractRecord
     * @example
     * // Get one TractRecord
     * const tractRecord = await prisma.tractRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TractRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TractRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__TractRecordClient<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TractRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TractRecordFindUniqueOrThrowArgs} args - Arguments to find a TractRecord
     * @example
     * // Get one TractRecord
     * const tractRecord = await prisma.tractRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TractRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TractRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TractRecordClient<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TractRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TractRecordFindFirstArgs} args - Arguments to find a TractRecord
     * @example
     * // Get one TractRecord
     * const tractRecord = await prisma.tractRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TractRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TractRecordFindFirstArgs<ExtArgs>>
    ): Prisma__TractRecordClient<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TractRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TractRecordFindFirstOrThrowArgs} args - Arguments to find a TractRecord
     * @example
     * // Get one TractRecord
     * const tractRecord = await prisma.tractRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TractRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TractRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TractRecordClient<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TractRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TractRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TractRecords
     * const tractRecords = await prisma.tractRecord.findMany()
     * 
     * // Get first 10 TractRecords
     * const tractRecords = await prisma.tractRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tractRecordWithIdOnly = await prisma.tractRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TractRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TractRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TractRecord.
     * @param {TractRecordCreateArgs} args - Arguments to create a TractRecord.
     * @example
     * // Create one TractRecord
     * const TractRecord = await prisma.tractRecord.create({
     *   data: {
     *     // ... data to create a TractRecord
     *   }
     * })
     * 
    **/
    create<T extends TractRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TractRecordCreateArgs<ExtArgs>>
    ): Prisma__TractRecordClient<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TractRecords.
     *     @param {TractRecordCreateManyArgs} args - Arguments to create many TractRecords.
     *     @example
     *     // Create many TractRecords
     *     const tractRecord = await prisma.tractRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TractRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TractRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TractRecord.
     * @param {TractRecordDeleteArgs} args - Arguments to delete one TractRecord.
     * @example
     * // Delete one TractRecord
     * const TractRecord = await prisma.tractRecord.delete({
     *   where: {
     *     // ... filter to delete one TractRecord
     *   }
     * })
     * 
    **/
    delete<T extends TractRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TractRecordDeleteArgs<ExtArgs>>
    ): Prisma__TractRecordClient<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TractRecord.
     * @param {TractRecordUpdateArgs} args - Arguments to update one TractRecord.
     * @example
     * // Update one TractRecord
     * const tractRecord = await prisma.tractRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TractRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TractRecordUpdateArgs<ExtArgs>>
    ): Prisma__TractRecordClient<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TractRecords.
     * @param {TractRecordDeleteManyArgs} args - Arguments to filter TractRecords to delete.
     * @example
     * // Delete a few TractRecords
     * const { count } = await prisma.tractRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TractRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TractRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TractRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TractRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TractRecords
     * const tractRecord = await prisma.tractRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TractRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TractRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TractRecord.
     * @param {TractRecordUpsertArgs} args - Arguments to update or create a TractRecord.
     * @example
     * // Update or create a TractRecord
     * const tractRecord = await prisma.tractRecord.upsert({
     *   create: {
     *     // ... data to create a TractRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TractRecord we want to update
     *   }
     * })
    **/
    upsert<T extends TractRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TractRecordUpsertArgs<ExtArgs>>
    ): Prisma__TractRecordClient<$Result.GetResult<Prisma.$TractRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TractRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TractRecordCountArgs} args - Arguments to filter TractRecords to count.
     * @example
     * // Count the number of TractRecords
     * const count = await prisma.tractRecord.count({
     *   where: {
     *     // ... the filter for the TractRecords we want to count
     *   }
     * })
    **/
    count<T extends TractRecordCountArgs>(
      args?: Subset<T, TractRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TractRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TractRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TractRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TractRecordAggregateArgs>(args: Subset<T, TractRecordAggregateArgs>): Prisma.PrismaPromise<GetTractRecordAggregateType<T>>

    /**
     * Group by TractRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TractRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TractRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TractRecordGroupByArgs['orderBy'] }
        : { orderBy?: TractRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TractRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTractRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TractRecord model
   */
  readonly fields: TractRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TractRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TractRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    stakeholder<T extends StakeholderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StakeholderDefaultArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TractRecord model
   */ 
  interface TractRecordFieldRefs {
    readonly id: FieldRef<"TractRecord", 'Int'>
    readonly tract: FieldRef<"TractRecord", 'Int'>
    readonly position: FieldRef<"TractRecord", 'Int'>
    readonly pin: FieldRef<"TractRecord", 'String'>
    readonly interest: FieldRef<"TractRecord", 'String'>
    readonly structure: FieldRef<"TractRecord", 'String'>
    readonly occupants: FieldRef<"TractRecord", 'Int'>
    readonly worksLand: FieldRef<"TractRecord", 'String'>
    readonly tractComments: FieldRef<"TractRecord", 'String'>
    readonly pipelineStatus: FieldRef<"TractRecord", 'String'>
    readonly commodity: FieldRef<"TractRecord", 'String'>
    readonly pageNumber: FieldRef<"TractRecord", 'String'>
    readonly keepdelete: FieldRef<"TractRecord", 'String'>
    readonly stakeholderId: FieldRef<"TractRecord", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * TractRecord findUnique
   */
  export type TractRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    /**
     * Filter, which TractRecord to fetch.
     */
    where: TractRecordWhereUniqueInput
  }


  /**
   * TractRecord findUniqueOrThrow
   */
  export type TractRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    /**
     * Filter, which TractRecord to fetch.
     */
    where: TractRecordWhereUniqueInput
  }


  /**
   * TractRecord findFirst
   */
  export type TractRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    /**
     * Filter, which TractRecord to fetch.
     */
    where?: TractRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TractRecords to fetch.
     */
    orderBy?: TractRecordOrderByWithRelationInput | TractRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TractRecords.
     */
    cursor?: TractRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TractRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TractRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TractRecords.
     */
    distinct?: TractRecordScalarFieldEnum | TractRecordScalarFieldEnum[]
  }


  /**
   * TractRecord findFirstOrThrow
   */
  export type TractRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    /**
     * Filter, which TractRecord to fetch.
     */
    where?: TractRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TractRecords to fetch.
     */
    orderBy?: TractRecordOrderByWithRelationInput | TractRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TractRecords.
     */
    cursor?: TractRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TractRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TractRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TractRecords.
     */
    distinct?: TractRecordScalarFieldEnum | TractRecordScalarFieldEnum[]
  }


  /**
   * TractRecord findMany
   */
  export type TractRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    /**
     * Filter, which TractRecords to fetch.
     */
    where?: TractRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TractRecords to fetch.
     */
    orderBy?: TractRecordOrderByWithRelationInput | TractRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TractRecords.
     */
    cursor?: TractRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TractRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TractRecords.
     */
    skip?: number
    distinct?: TractRecordScalarFieldEnum | TractRecordScalarFieldEnum[]
  }


  /**
   * TractRecord create
   */
  export type TractRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TractRecord.
     */
    data: XOR<TractRecordCreateInput, TractRecordUncheckedCreateInput>
  }


  /**
   * TractRecord createMany
   */
  export type TractRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TractRecords.
     */
    data: TractRecordCreateManyInput | TractRecordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TractRecord update
   */
  export type TractRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TractRecord.
     */
    data: XOR<TractRecordUpdateInput, TractRecordUncheckedUpdateInput>
    /**
     * Choose, which TractRecord to update.
     */
    where: TractRecordWhereUniqueInput
  }


  /**
   * TractRecord updateMany
   */
  export type TractRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TractRecords.
     */
    data: XOR<TractRecordUpdateManyMutationInput, TractRecordUncheckedUpdateManyInput>
    /**
     * Filter which TractRecords to update
     */
    where?: TractRecordWhereInput
  }


  /**
   * TractRecord upsert
   */
  export type TractRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TractRecord to update in case it exists.
     */
    where: TractRecordWhereUniqueInput
    /**
     * In case the TractRecord found by the `where` argument doesn't exist, create a new TractRecord with this data.
     */
    create: XOR<TractRecordCreateInput, TractRecordUncheckedCreateInput>
    /**
     * In case the TractRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TractRecordUpdateInput, TractRecordUncheckedUpdateInput>
  }


  /**
   * TractRecord delete
   */
  export type TractRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
    /**
     * Filter which TractRecord to delete.
     */
    where: TractRecordWhereUniqueInput
  }


  /**
   * TractRecord deleteMany
   */
  export type TractRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TractRecords to delete
     */
    where?: TractRecordWhereInput
  }


  /**
   * TractRecord without action
   */
  export type TractRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TractRecord
     */
    select?: TractRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TractRecordInclude<ExtArgs> | null
  }



  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type DeliverySumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    id: number | null
    date: string | null
    delivery_method: string | null
    carrier: string | null
    route: string | null
    destination: string | null
    completed: boolean | null
    notes: string | null
    projectId: number | null
  }

  export type DeliveryMaxAggregateOutputType = {
    id: number | null
    date: string | null
    delivery_method: string | null
    carrier: string | null
    route: string | null
    destination: string | null
    completed: boolean | null
    notes: string | null
    projectId: number | null
  }

  export type DeliveryCountAggregateOutputType = {
    id: number
    date: number
    delivery_method: number
    carrier: number
    route: number
    destination: number
    completed: number
    notes: number
    projectId: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type DeliverySumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type DeliveryMinAggregateInputType = {
    id?: true
    date?: true
    delivery_method?: true
    carrier?: true
    route?: true
    destination?: true
    completed?: true
    notes?: true
    projectId?: true
  }

  export type DeliveryMaxAggregateInputType = {
    id?: true
    date?: true
    delivery_method?: true
    carrier?: true
    route?: true
    destination?: true
    completed?: true
    notes?: true
    projectId?: true
  }

  export type DeliveryCountAggregateInputType = {
    id?: true
    date?: true
    delivery_method?: true
    carrier?: true
    route?: true
    destination?: true
    completed?: true
    notes?: true
    projectId?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    id: number
    date: string | null
    delivery_method: string
    carrier: string | null
    route: string
    destination: string
    completed: boolean
    notes: string
    projectId: number
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    delivery_method?: boolean
    carrier?: boolean
    route?: boolean
    destination?: boolean
    completed?: boolean
    notes?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    packages?: boolean | Delivery$packagesArgs<ExtArgs>
    _count?: boolean | DeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectScalar = {
    id?: boolean
    date?: boolean
    delivery_method?: boolean
    carrier?: boolean
    route?: boolean
    destination?: boolean
    completed?: boolean
    notes?: boolean
    projectId?: boolean
  }

  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    packages?: boolean | Delivery$packagesArgs<ExtArgs>
    _count?: boolean | DeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      packages: Prisma.$PackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string | null
      delivery_method: string
      carrier: string | null
      route: string
      destination: string
      completed: boolean
      notes: string
      projectId: number
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }


  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DeliveryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Delivery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DeliveryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryWithIdOnly = await prisma.delivery.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DeliveryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
    **/
    create<T extends DeliveryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Deliveries.
     *     @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     *     @example
     *     // Create many Deliveries
     *     const delivery = await prisma.delivery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DeliveryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
    **/
    delete<T extends DeliveryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DeliveryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DeliveryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DeliveryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
    **/
    upsert<T extends DeliveryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    packages<T extends Delivery$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Delivery$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Delivery model
   */ 
  interface DeliveryFieldRefs {
    readonly id: FieldRef<"Delivery", 'Int'>
    readonly date: FieldRef<"Delivery", 'String'>
    readonly delivery_method: FieldRef<"Delivery", 'String'>
    readonly carrier: FieldRef<"Delivery", 'String'>
    readonly route: FieldRef<"Delivery", 'String'>
    readonly destination: FieldRef<"Delivery", 'String'>
    readonly completed: FieldRef<"Delivery", 'Boolean'>
    readonly notes: FieldRef<"Delivery", 'String'>
    readonly projectId: FieldRef<"Delivery", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }


  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }


  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }


  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }


  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }


  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }


  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }


  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
  }


  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }


  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }


  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
  }


  /**
   * Delivery.packages
   */
  export type Delivery$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }


  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
  }



  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    id: number | null
    packageTypeId: number | null
    deliveryId: number | null
    stakeholderId: number | null
  }

  export type PackageSumAggregateOutputType = {
    id: number | null
    packageTypeId: number | null
    deliveryId: number | null
    stakeholderId: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: number | null
    packageTypeId: number | null
    deliveryId: number | null
    stakeholderId: number | null
  }

  export type PackageMaxAggregateOutputType = {
    id: number | null
    packageTypeId: number | null
    deliveryId: number | null
    stakeholderId: number | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    packageTypeId: number
    deliveryId: number
    stakeholderId: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    id?: true
    packageTypeId?: true
    deliveryId?: true
    stakeholderId?: true
  }

  export type PackageSumAggregateInputType = {
    id?: true
    packageTypeId?: true
    deliveryId?: true
    stakeholderId?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    packageTypeId?: true
    deliveryId?: true
    stakeholderId?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    packageTypeId?: true
    deliveryId?: true
    stakeholderId?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    packageTypeId?: true
    deliveryId?: true
    stakeholderId?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: number
    packageTypeId: number | null
    deliveryId: number
    stakeholderId: number
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageTypeId?: boolean
    deliveryId?: boolean
    stakeholderId?: boolean
    packageType?: boolean | Package$packageTypeArgs<ExtArgs>
    delivery?: boolean | DeliveryDefaultArgs<ExtArgs>
    stakeholder?: boolean | StakeholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    packageTypeId?: boolean
    deliveryId?: boolean
    stakeholderId?: boolean
  }

  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packageType?: boolean | Package$packageTypeArgs<ExtArgs>
    delivery?: boolean | DeliveryDefaultArgs<ExtArgs>
    stakeholder?: boolean | StakeholderDefaultArgs<ExtArgs>
  }


  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      packageType: Prisma.$PackageTypePayload<ExtArgs> | null
      delivery: Prisma.$DeliveryPayload<ExtArgs>
      stakeholder: Prisma.$StakeholderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      packageTypeId: number | null
      deliveryId: number
      stakeholderId: number
    }, ExtArgs["result"]["package"]>
    composites: {}
  }


  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PackageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Package that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PackageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PackageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
    **/
    create<T extends PackageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PackageCreateArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Packages.
     *     @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     *     @example
     *     // Create many Packages
     *     const package = await prisma.package.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PackageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
    **/
    delete<T extends PackageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PackageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PackageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PackageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
    **/
    upsert<T extends PackageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    packageType<T extends Package$packageTypeArgs<ExtArgs> = {}>(args?: Subset<T, Package$packageTypeArgs<ExtArgs>>): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    delivery<T extends DeliveryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryDefaultArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    stakeholder<T extends StakeholderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StakeholderDefaultArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Package model
   */ 
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'Int'>
    readonly packageTypeId: FieldRef<"Package", 'Int'>
    readonly deliveryId: FieldRef<"Package", 'Int'>
    readonly stakeholderId: FieldRef<"Package", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }


  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }


  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }


  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }


  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }


  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }


  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }


  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
  }


  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }


  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }


  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
  }


  /**
   * Package.packageType
   */
  export type Package$packageTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    where?: PackageTypeWhereInput
  }


  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
  }



  /**
   * Model PackageType
   */

  export type AggregatePackageType = {
    _count: PackageTypeCountAggregateOutputType | null
    _avg: PackageTypeAvgAggregateOutputType | null
    _sum: PackageTypeSumAggregateOutputType | null
    _min: PackageTypeMinAggregateOutputType | null
    _max: PackageTypeMaxAggregateOutputType | null
  }

  export type PackageTypeAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type PackageTypeSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type PackageTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    notes: string | null
    projectId: number | null
  }

  export type PackageTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    notes: string | null
    projectId: number | null
  }

  export type PackageTypeCountAggregateOutputType = {
    id: number
    name: number
    notes: number
    projectId: number
    _all: number
  }


  export type PackageTypeAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type PackageTypeSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type PackageTypeMinAggregateInputType = {
    id?: true
    name?: true
    notes?: true
    projectId?: true
  }

  export type PackageTypeMaxAggregateInputType = {
    id?: true
    name?: true
    notes?: true
    projectId?: true
  }

  export type PackageTypeCountAggregateInputType = {
    id?: true
    name?: true
    notes?: true
    projectId?: true
    _all?: true
  }

  export type PackageTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageType to aggregate.
     */
    where?: PackageTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageTypes to fetch.
     */
    orderBy?: PackageTypeOrderByWithRelationInput | PackageTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageTypes
    **/
    _count?: true | PackageTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageTypeMaxAggregateInputType
  }

  export type GetPackageTypeAggregateType<T extends PackageTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageType[P]>
      : GetScalarType<T[P], AggregatePackageType[P]>
  }




  export type PackageTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageTypeWhereInput
    orderBy?: PackageTypeOrderByWithAggregationInput | PackageTypeOrderByWithAggregationInput[]
    by: PackageTypeScalarFieldEnum[] | PackageTypeScalarFieldEnum
    having?: PackageTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageTypeCountAggregateInputType | true
    _avg?: PackageTypeAvgAggregateInputType
    _sum?: PackageTypeSumAggregateInputType
    _min?: PackageTypeMinAggregateInputType
    _max?: PackageTypeMaxAggregateInputType
  }

  export type PackageTypeGroupByOutputType = {
    id: number
    name: string
    notes: string
    projectId: number
    _count: PackageTypeCountAggregateOutputType | null
    _avg: PackageTypeAvgAggregateOutputType | null
    _sum: PackageTypeSumAggregateOutputType | null
    _min: PackageTypeMinAggregateOutputType | null
    _max: PackageTypeMaxAggregateOutputType | null
  }

  type GetPackageTypeGroupByPayload<T extends PackageTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PackageTypeGroupByOutputType[P]>
        }
      >
    >


  export type PackageTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    notes?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    packages?: boolean | PackageType$packagesArgs<ExtArgs>
    items?: boolean | PackageType$itemsArgs<ExtArgs>
    _count?: boolean | PackageTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageType"]>

  export type PackageTypeSelectScalar = {
    id?: boolean
    name?: boolean
    notes?: boolean
    projectId?: boolean
  }

  export type PackageTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    packages?: boolean | PackageType$packagesArgs<ExtArgs>
    items?: boolean | PackageType$itemsArgs<ExtArgs>
    _count?: boolean | PackageTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PackageTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageType"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      packages: Prisma.$PackagePayload<ExtArgs>[]
      items: Prisma.$PackageItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      notes: string
      projectId: number
    }, ExtArgs["result"]["packageType"]>
    composites: {}
  }


  type PackageTypeGetPayload<S extends boolean | null | undefined | PackageTypeDefaultArgs> = $Result.GetResult<Prisma.$PackageTypePayload, S>

  type PackageTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PackageTypeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PackageTypeCountAggregateInputType | true
    }

  export interface PackageTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageType'], meta: { name: 'PackageType' } }
    /**
     * Find zero or one PackageType that matches the filter.
     * @param {PackageTypeFindUniqueArgs} args - Arguments to find a PackageType
     * @example
     * // Get one PackageType
     * const packageType = await prisma.packageType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PackageTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PackageTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PackageType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PackageTypeFindUniqueOrThrowArgs} args - Arguments to find a PackageType
     * @example
     * // Get one PackageType
     * const packageType = await prisma.packageType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PackageTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PackageType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageTypeFindFirstArgs} args - Arguments to find a PackageType
     * @example
     * // Get one PackageType
     * const packageType = await prisma.packageType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PackageTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageTypeFindFirstArgs<ExtArgs>>
    ): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PackageType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageTypeFindFirstOrThrowArgs} args - Arguments to find a PackageType
     * @example
     * // Get one PackageType
     * const packageType = await prisma.packageType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PackageTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PackageTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageTypes
     * const packageTypes = await prisma.packageType.findMany()
     * 
     * // Get first 10 PackageTypes
     * const packageTypes = await prisma.packageType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageTypeWithIdOnly = await prisma.packageType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PackageTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PackageType.
     * @param {PackageTypeCreateArgs} args - Arguments to create a PackageType.
     * @example
     * // Create one PackageType
     * const PackageType = await prisma.packageType.create({
     *   data: {
     *     // ... data to create a PackageType
     *   }
     * })
     * 
    **/
    create<T extends PackageTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PackageTypeCreateArgs<ExtArgs>>
    ): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PackageTypes.
     *     @param {PackageTypeCreateManyArgs} args - Arguments to create many PackageTypes.
     *     @example
     *     // Create many PackageTypes
     *     const packageType = await prisma.packageType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PackageTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PackageType.
     * @param {PackageTypeDeleteArgs} args - Arguments to delete one PackageType.
     * @example
     * // Delete one PackageType
     * const PackageType = await prisma.packageType.delete({
     *   where: {
     *     // ... filter to delete one PackageType
     *   }
     * })
     * 
    **/
    delete<T extends PackageTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PackageTypeDeleteArgs<ExtArgs>>
    ): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PackageType.
     * @param {PackageTypeUpdateArgs} args - Arguments to update one PackageType.
     * @example
     * // Update one PackageType
     * const packageType = await prisma.packageType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PackageTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PackageTypeUpdateArgs<ExtArgs>>
    ): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PackageTypes.
     * @param {PackageTypeDeleteManyArgs} args - Arguments to filter PackageTypes to delete.
     * @example
     * // Delete a few PackageTypes
     * const { count } = await prisma.packageType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PackageTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageTypes
     * const packageType = await prisma.packageType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PackageTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PackageTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PackageType.
     * @param {PackageTypeUpsertArgs} args - Arguments to update or create a PackageType.
     * @example
     * // Update or create a PackageType
     * const packageType = await prisma.packageType.upsert({
     *   create: {
     *     // ... data to create a PackageType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageType we want to update
     *   }
     * })
    **/
    upsert<T extends PackageTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PackageTypeUpsertArgs<ExtArgs>>
    ): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PackageTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageTypeCountArgs} args - Arguments to filter PackageTypes to count.
     * @example
     * // Count the number of PackageTypes
     * const count = await prisma.packageType.count({
     *   where: {
     *     // ... the filter for the PackageTypes we want to count
     *   }
     * })
    **/
    count<T extends PackageTypeCountArgs>(
      args?: Subset<T, PackageTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageTypeAggregateArgs>(args: Subset<T, PackageTypeAggregateArgs>): Prisma.PrismaPromise<GetPackageTypeAggregateType<T>>

    /**
     * Group by PackageType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageTypeGroupByArgs['orderBy'] }
        : { orderBy?: PackageTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageType model
   */
  readonly fields: PackageTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    packages<T extends PackageType$packagesArgs<ExtArgs> = {}>(args?: Subset<T, PackageType$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findMany'> | Null>;

    items<T extends PackageType$itemsArgs<ExtArgs> = {}>(args?: Subset<T, PackageType$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PackageType model
   */ 
  interface PackageTypeFieldRefs {
    readonly id: FieldRef<"PackageType", 'Int'>
    readonly name: FieldRef<"PackageType", 'String'>
    readonly notes: FieldRef<"PackageType", 'String'>
    readonly projectId: FieldRef<"PackageType", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PackageType findUnique
   */
  export type PackageTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackageType to fetch.
     */
    where: PackageTypeWhereUniqueInput
  }


  /**
   * PackageType findUniqueOrThrow
   */
  export type PackageTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackageType to fetch.
     */
    where: PackageTypeWhereUniqueInput
  }


  /**
   * PackageType findFirst
   */
  export type PackageTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackageType to fetch.
     */
    where?: PackageTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageTypes to fetch.
     */
    orderBy?: PackageTypeOrderByWithRelationInput | PackageTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageTypes.
     */
    cursor?: PackageTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageTypes.
     */
    distinct?: PackageTypeScalarFieldEnum | PackageTypeScalarFieldEnum[]
  }


  /**
   * PackageType findFirstOrThrow
   */
  export type PackageTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackageType to fetch.
     */
    where?: PackageTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageTypes to fetch.
     */
    orderBy?: PackageTypeOrderByWithRelationInput | PackageTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageTypes.
     */
    cursor?: PackageTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageTypes.
     */
    distinct?: PackageTypeScalarFieldEnum | PackageTypeScalarFieldEnum[]
  }


  /**
   * PackageType findMany
   */
  export type PackageTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackageTypes to fetch.
     */
    where?: PackageTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageTypes to fetch.
     */
    orderBy?: PackageTypeOrderByWithRelationInput | PackageTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageTypes.
     */
    cursor?: PackageTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageTypes.
     */
    skip?: number
    distinct?: PackageTypeScalarFieldEnum | PackageTypeScalarFieldEnum[]
  }


  /**
   * PackageType create
   */
  export type PackageTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageType.
     */
    data: XOR<PackageTypeCreateInput, PackageTypeUncheckedCreateInput>
  }


  /**
   * PackageType createMany
   */
  export type PackageTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageTypes.
     */
    data: PackageTypeCreateManyInput | PackageTypeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PackageType update
   */
  export type PackageTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageType.
     */
    data: XOR<PackageTypeUpdateInput, PackageTypeUncheckedUpdateInput>
    /**
     * Choose, which PackageType to update.
     */
    where: PackageTypeWhereUniqueInput
  }


  /**
   * PackageType updateMany
   */
  export type PackageTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageTypes.
     */
    data: XOR<PackageTypeUpdateManyMutationInput, PackageTypeUncheckedUpdateManyInput>
    /**
     * Filter which PackageTypes to update
     */
    where?: PackageTypeWhereInput
  }


  /**
   * PackageType upsert
   */
  export type PackageTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageType to update in case it exists.
     */
    where: PackageTypeWhereUniqueInput
    /**
     * In case the PackageType found by the `where` argument doesn't exist, create a new PackageType with this data.
     */
    create: XOR<PackageTypeCreateInput, PackageTypeUncheckedCreateInput>
    /**
     * In case the PackageType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageTypeUpdateInput, PackageTypeUncheckedUpdateInput>
  }


  /**
   * PackageType delete
   */
  export type PackageTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
    /**
     * Filter which PackageType to delete.
     */
    where: PackageTypeWhereUniqueInput
  }


  /**
   * PackageType deleteMany
   */
  export type PackageTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageTypes to delete
     */
    where?: PackageTypeWhereInput
  }


  /**
   * PackageType.packages
   */
  export type PackageType$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }


  /**
   * PackageType.items
   */
  export type PackageType$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    where?: PackageItemWhereInput
    orderBy?: PackageItemOrderByWithRelationInput | PackageItemOrderByWithRelationInput[]
    cursor?: PackageItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageItemScalarFieldEnum | PackageItemScalarFieldEnum[]
  }


  /**
   * PackageType without action
   */
  export type PackageTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageType
     */
    select?: PackageTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageTypeInclude<ExtArgs> | null
  }



  /**
   * Model PackageItem
   */

  export type AggregatePackageItem = {
    _count: PackageItemCountAggregateOutputType | null
    _avg: PackageItemAvgAggregateOutputType | null
    _sum: PackageItemSumAggregateOutputType | null
    _min: PackageItemMinAggregateOutputType | null
    _max: PackageItemMaxAggregateOutputType | null
  }

  export type PackageItemAvgAggregateOutputType = {
    id: number | null
    packageTypeId: number | null
    quantity: number | null
    itemId: number | null
  }

  export type PackageItemSumAggregateOutputType = {
    id: number | null
    packageTypeId: number | null
    quantity: number | null
    itemId: number | null
  }

  export type PackageItemMinAggregateOutputType = {
    id: number | null
    packageTypeId: number | null
    quantity: number | null
    itemId: number | null
  }

  export type PackageItemMaxAggregateOutputType = {
    id: number | null
    packageTypeId: number | null
    quantity: number | null
    itemId: number | null
  }

  export type PackageItemCountAggregateOutputType = {
    id: number
    packageTypeId: number
    quantity: number
    itemId: number
    _all: number
  }


  export type PackageItemAvgAggregateInputType = {
    id?: true
    packageTypeId?: true
    quantity?: true
    itemId?: true
  }

  export type PackageItemSumAggregateInputType = {
    id?: true
    packageTypeId?: true
    quantity?: true
    itemId?: true
  }

  export type PackageItemMinAggregateInputType = {
    id?: true
    packageTypeId?: true
    quantity?: true
    itemId?: true
  }

  export type PackageItemMaxAggregateInputType = {
    id?: true
    packageTypeId?: true
    quantity?: true
    itemId?: true
  }

  export type PackageItemCountAggregateInputType = {
    id?: true
    packageTypeId?: true
    quantity?: true
    itemId?: true
    _all?: true
  }

  export type PackageItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageItem to aggregate.
     */
    where?: PackageItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageItems to fetch.
     */
    orderBy?: PackageItemOrderByWithRelationInput | PackageItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageItems
    **/
    _count?: true | PackageItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageItemMaxAggregateInputType
  }

  export type GetPackageItemAggregateType<T extends PackageItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageItem[P]>
      : GetScalarType<T[P], AggregatePackageItem[P]>
  }




  export type PackageItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageItemWhereInput
    orderBy?: PackageItemOrderByWithAggregationInput | PackageItemOrderByWithAggregationInput[]
    by: PackageItemScalarFieldEnum[] | PackageItemScalarFieldEnum
    having?: PackageItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageItemCountAggregateInputType | true
    _avg?: PackageItemAvgAggregateInputType
    _sum?: PackageItemSumAggregateInputType
    _min?: PackageItemMinAggregateInputType
    _max?: PackageItemMaxAggregateInputType
  }

  export type PackageItemGroupByOutputType = {
    id: number
    packageTypeId: number
    quantity: number
    itemId: number
    _count: PackageItemCountAggregateOutputType | null
    _avg: PackageItemAvgAggregateOutputType | null
    _sum: PackageItemSumAggregateOutputType | null
    _min: PackageItemMinAggregateOutputType | null
    _max: PackageItemMaxAggregateOutputType | null
  }

  type GetPackageItemGroupByPayload<T extends PackageItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageItemGroupByOutputType[P]>
            : GetScalarType<T[P], PackageItemGroupByOutputType[P]>
        }
      >
    >


  export type PackageItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageTypeId?: boolean
    quantity?: boolean
    itemId?: boolean
    packageType?: boolean | PackageTypeDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageItem"]>

  export type PackageItemSelectScalar = {
    id?: boolean
    packageTypeId?: boolean
    quantity?: boolean
    itemId?: boolean
  }

  export type PackageItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packageType?: boolean | PackageTypeDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }


  export type $PackageItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageItem"
    objects: {
      packageType: Prisma.$PackageTypePayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      packageTypeId: number
      quantity: number
      itemId: number
    }, ExtArgs["result"]["packageItem"]>
    composites: {}
  }


  type PackageItemGetPayload<S extends boolean | null | undefined | PackageItemDefaultArgs> = $Result.GetResult<Prisma.$PackageItemPayload, S>

  type PackageItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PackageItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PackageItemCountAggregateInputType | true
    }

  export interface PackageItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageItem'], meta: { name: 'PackageItem' } }
    /**
     * Find zero or one PackageItem that matches the filter.
     * @param {PackageItemFindUniqueArgs} args - Arguments to find a PackageItem
     * @example
     * // Get one PackageItem
     * const packageItem = await prisma.packageItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PackageItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PackageItemFindUniqueArgs<ExtArgs>>
    ): Prisma__PackageItemClient<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PackageItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PackageItemFindUniqueOrThrowArgs} args - Arguments to find a PackageItem
     * @example
     * // Get one PackageItem
     * const packageItem = await prisma.packageItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PackageItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PackageItemClient<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PackageItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageItemFindFirstArgs} args - Arguments to find a PackageItem
     * @example
     * // Get one PackageItem
     * const packageItem = await prisma.packageItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PackageItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageItemFindFirstArgs<ExtArgs>>
    ): Prisma__PackageItemClient<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PackageItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageItemFindFirstOrThrowArgs} args - Arguments to find a PackageItem
     * @example
     * // Get one PackageItem
     * const packageItem = await prisma.packageItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PackageItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PackageItemClient<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PackageItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageItems
     * const packageItems = await prisma.packageItem.findMany()
     * 
     * // Get first 10 PackageItems
     * const packageItems = await prisma.packageItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageItemWithIdOnly = await prisma.packageItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PackageItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PackageItem.
     * @param {PackageItemCreateArgs} args - Arguments to create a PackageItem.
     * @example
     * // Create one PackageItem
     * const PackageItem = await prisma.packageItem.create({
     *   data: {
     *     // ... data to create a PackageItem
     *   }
     * })
     * 
    **/
    create<T extends PackageItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PackageItemCreateArgs<ExtArgs>>
    ): Prisma__PackageItemClient<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PackageItems.
     *     @param {PackageItemCreateManyArgs} args - Arguments to create many PackageItems.
     *     @example
     *     // Create many PackageItems
     *     const packageItem = await prisma.packageItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PackageItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PackageItem.
     * @param {PackageItemDeleteArgs} args - Arguments to delete one PackageItem.
     * @example
     * // Delete one PackageItem
     * const PackageItem = await prisma.packageItem.delete({
     *   where: {
     *     // ... filter to delete one PackageItem
     *   }
     * })
     * 
    **/
    delete<T extends PackageItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PackageItemDeleteArgs<ExtArgs>>
    ): Prisma__PackageItemClient<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PackageItem.
     * @param {PackageItemUpdateArgs} args - Arguments to update one PackageItem.
     * @example
     * // Update one PackageItem
     * const packageItem = await prisma.packageItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PackageItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PackageItemUpdateArgs<ExtArgs>>
    ): Prisma__PackageItemClient<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PackageItems.
     * @param {PackageItemDeleteManyArgs} args - Arguments to filter PackageItems to delete.
     * @example
     * // Delete a few PackageItems
     * const { count } = await prisma.packageItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PackageItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageItems
     * const packageItem = await prisma.packageItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PackageItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PackageItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PackageItem.
     * @param {PackageItemUpsertArgs} args - Arguments to update or create a PackageItem.
     * @example
     * // Update or create a PackageItem
     * const packageItem = await prisma.packageItem.upsert({
     *   create: {
     *     // ... data to create a PackageItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageItem we want to update
     *   }
     * })
    **/
    upsert<T extends PackageItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PackageItemUpsertArgs<ExtArgs>>
    ): Prisma__PackageItemClient<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PackageItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageItemCountArgs} args - Arguments to filter PackageItems to count.
     * @example
     * // Count the number of PackageItems
     * const count = await prisma.packageItem.count({
     *   where: {
     *     // ... the filter for the PackageItems we want to count
     *   }
     * })
    **/
    count<T extends PackageItemCountArgs>(
      args?: Subset<T, PackageItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageItemAggregateArgs>(args: Subset<T, PackageItemAggregateArgs>): Prisma.PrismaPromise<GetPackageItemAggregateType<T>>

    /**
     * Group by PackageItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageItemGroupByArgs['orderBy'] }
        : { orderBy?: PackageItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageItem model
   */
  readonly fields: PackageItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    packageType<T extends PackageTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageTypeDefaultArgs<ExtArgs>>): Prisma__PackageTypeClient<$Result.GetResult<Prisma.$PackageTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PackageItem model
   */ 
  interface PackageItemFieldRefs {
    readonly id: FieldRef<"PackageItem", 'Int'>
    readonly packageTypeId: FieldRef<"PackageItem", 'Int'>
    readonly quantity: FieldRef<"PackageItem", 'Int'>
    readonly itemId: FieldRef<"PackageItem", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PackageItem findUnique
   */
  export type PackageItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageItem to fetch.
     */
    where: PackageItemWhereUniqueInput
  }


  /**
   * PackageItem findUniqueOrThrow
   */
  export type PackageItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageItem to fetch.
     */
    where: PackageItemWhereUniqueInput
  }


  /**
   * PackageItem findFirst
   */
  export type PackageItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageItem to fetch.
     */
    where?: PackageItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageItems to fetch.
     */
    orderBy?: PackageItemOrderByWithRelationInput | PackageItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageItems.
     */
    cursor?: PackageItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageItems.
     */
    distinct?: PackageItemScalarFieldEnum | PackageItemScalarFieldEnum[]
  }


  /**
   * PackageItem findFirstOrThrow
   */
  export type PackageItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageItem to fetch.
     */
    where?: PackageItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageItems to fetch.
     */
    orderBy?: PackageItemOrderByWithRelationInput | PackageItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageItems.
     */
    cursor?: PackageItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageItems.
     */
    distinct?: PackageItemScalarFieldEnum | PackageItemScalarFieldEnum[]
  }


  /**
   * PackageItem findMany
   */
  export type PackageItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageItems to fetch.
     */
    where?: PackageItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageItems to fetch.
     */
    orderBy?: PackageItemOrderByWithRelationInput | PackageItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageItems.
     */
    cursor?: PackageItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageItems.
     */
    skip?: number
    distinct?: PackageItemScalarFieldEnum | PackageItemScalarFieldEnum[]
  }


  /**
   * PackageItem create
   */
  export type PackageItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageItem.
     */
    data: XOR<PackageItemCreateInput, PackageItemUncheckedCreateInput>
  }


  /**
   * PackageItem createMany
   */
  export type PackageItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageItems.
     */
    data: PackageItemCreateManyInput | PackageItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PackageItem update
   */
  export type PackageItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageItem.
     */
    data: XOR<PackageItemUpdateInput, PackageItemUncheckedUpdateInput>
    /**
     * Choose, which PackageItem to update.
     */
    where: PackageItemWhereUniqueInput
  }


  /**
   * PackageItem updateMany
   */
  export type PackageItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageItems.
     */
    data: XOR<PackageItemUpdateManyMutationInput, PackageItemUncheckedUpdateManyInput>
    /**
     * Filter which PackageItems to update
     */
    where?: PackageItemWhereInput
  }


  /**
   * PackageItem upsert
   */
  export type PackageItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageItem to update in case it exists.
     */
    where: PackageItemWhereUniqueInput
    /**
     * In case the PackageItem found by the `where` argument doesn't exist, create a new PackageItem with this data.
     */
    create: XOR<PackageItemCreateInput, PackageItemUncheckedCreateInput>
    /**
     * In case the PackageItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageItemUpdateInput, PackageItemUncheckedUpdateInput>
  }


  /**
   * PackageItem delete
   */
  export type PackageItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    /**
     * Filter which PackageItem to delete.
     */
    where: PackageItemWhereUniqueInput
  }


  /**
   * PackageItem deleteMany
   */
  export type PackageItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageItems to delete
     */
    where?: PackageItemWhereInput
  }


  /**
   * PackageItem without action
   */
  export type PackageItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
  }



  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    projectId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    projectId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    quantity: number | null
    projectId: number | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    quantity: number | null
    projectId: number | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    quantity: number
    projectId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    projectId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    quantity?: true
    projectId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    quantity?: true
    projectId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    quantity?: true
    projectId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    quantity?: true
    projectId?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    name: string
    description: string
    image: string
    quantity: number
    projectId: number
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    quantity?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    packageItems?: boolean | Item$packageItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    quantity?: boolean
    projectId?: boolean
  }

  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    packageItems?: boolean | Item$packageItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      packageItems: Prisma.$PackageItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      image: string
      quantity: number
      projectId: number
    }, ExtArgs["result"]["item"]>
    composites: {}
  }


  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends ItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemCreateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Items.
     *     @param {ItemCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const item = await prisma.item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends ItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends ItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    packageItems<T extends Item$packageItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$packageItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly image: FieldRef<"Item", 'String'>
    readonly quantity: FieldRef<"Item", 'Int'>
    readonly projectId: FieldRef<"Item", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }


  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }


  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }


  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }


  /**
   * Item.packageItems
   */
  export type Item$packageItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageItem
     */
    select?: PackageItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PackageItemInclude<ExtArgs> | null
    where?: PackageItemWhereInput
    orderBy?: PackageItemOrderByWithRelationInput | PackageItemOrderByWithRelationInput[]
    cursor?: PackageItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageItemScalarFieldEnum | PackageItemScalarFieldEnum[]
  }


  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    isAdmin: 'isAdmin',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    year: 'year',
    notes: 'notes',
    surveyLink: 'surveyLink'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const StakeholderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    streetAddress: 'streetAddress',
    mailingAddress: 'mailingAddress',
    phoneNumber: 'phoneNumber',
    isPerson: 'isPerson',
    stakeholderComments: 'stakeholderComments',
    stakeholderStatus: 'stakeholderStatus',
    contacted: 'contacted',
    consultation: 'consultation',
    attempts: 'attempts',
    email: 'email',
    followUp: 'followUp',
    projectId: 'projectId',
    packageId: 'packageId'
  };

  export type StakeholderScalarFieldEnum = (typeof StakeholderScalarFieldEnum)[keyof typeof StakeholderScalarFieldEnum]


  export const TractRecordScalarFieldEnum: {
    id: 'id',
    tract: 'tract',
    position: 'position',
    pin: 'pin',
    interest: 'interest',
    structure: 'structure',
    occupants: 'occupants',
    worksLand: 'worksLand',
    tractComments: 'tractComments',
    pipelineStatus: 'pipelineStatus',
    commodity: 'commodity',
    pageNumber: 'pageNumber',
    keepdelete: 'keepdelete',
    stakeholderId: 'stakeholderId'
  };

  export type TractRecordScalarFieldEnum = (typeof TractRecordScalarFieldEnum)[keyof typeof TractRecordScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    id: 'id',
    date: 'date',
    delivery_method: 'delivery_method',
    carrier: 'carrier',
    route: 'route',
    destination: 'destination',
    completed: 'completed',
    notes: 'notes',
    projectId: 'projectId'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    packageTypeId: 'packageTypeId',
    deliveryId: 'deliveryId',
    stakeholderId: 'stakeholderId'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const PackageTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    notes: 'notes',
    projectId: 'projectId'
  };

  export type PackageTypeScalarFieldEnum = (typeof PackageTypeScalarFieldEnum)[keyof typeof PackageTypeScalarFieldEnum]


  export const PackageItemScalarFieldEnum: {
    id: 'id',
    packageTypeId: 'packageTypeId',
    quantity: 'quantity',
    itemId: 'itemId'
  };

  export type PackageItemScalarFieldEnum = (typeof PackageItemScalarFieldEnum)[keyof typeof PackageItemScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    quantity: 'quantity',
    projectId: 'projectId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    isAdmin?: BoolFilter<"User"> | boolean
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    isAdmin?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
  }, "id" | "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    year?: IntFilter<"Project"> | number
    notes?: StringFilter<"Project"> | string
    surveyLink?: StringFilter<"Project"> | string
    stakeholders?: StakeholderListRelationFilter
    deliveries?: DeliveryListRelationFilter
    items?: ItemListRelationFilter
    PackageType?: PackageTypeListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    notes?: SortOrder
    surveyLink?: SortOrder
    stakeholders?: StakeholderOrderByRelationAggregateInput
    deliveries?: DeliveryOrderByRelationAggregateInput
    items?: ItemOrderByRelationAggregateInput
    PackageType?: PackageTypeOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    year?: IntFilter<"Project"> | number
    notes?: StringFilter<"Project"> | string
    surveyLink?: StringFilter<"Project"> | string
    stakeholders?: StakeholderListRelationFilter
    deliveries?: DeliveryListRelationFilter
    items?: ItemListRelationFilter
    PackageType?: PackageTypeListRelationFilter
  }, "id" | "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    notes?: SortOrder
    surveyLink?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    year?: IntWithAggregatesFilter<"Project"> | number
    notes?: StringWithAggregatesFilter<"Project"> | string
    surveyLink?: StringWithAggregatesFilter<"Project"> | string
  }

  export type StakeholderWhereInput = {
    AND?: StakeholderWhereInput | StakeholderWhereInput[]
    OR?: StakeholderWhereInput[]
    NOT?: StakeholderWhereInput | StakeholderWhereInput[]
    id?: IntFilter<"Stakeholder"> | number
    name?: StringFilter<"Stakeholder"> | string
    streetAddress?: StringFilter<"Stakeholder"> | string
    mailingAddress?: StringFilter<"Stakeholder"> | string
    phoneNumber?: StringFilter<"Stakeholder"> | string
    isPerson?: StringFilter<"Stakeholder"> | string
    stakeholderComments?: StringFilter<"Stakeholder"> | string
    stakeholderStatus?: StringFilter<"Stakeholder"> | string
    contacted?: StringFilter<"Stakeholder"> | string
    consultation?: StringFilter<"Stakeholder"> | string
    attempts?: StringFilter<"Stakeholder"> | string
    email?: StringFilter<"Stakeholder"> | string
    followUp?: StringFilter<"Stakeholder"> | string
    projectId?: IntFilter<"Stakeholder"> | number
    packageId?: IntNullableFilter<"Stakeholder"> | number | null
    projects?: XOR<ProjectRelationFilter, ProjectWhereInput>
    tractRecords?: TractRecordListRelationFilter
    package?: XOR<PackageNullableRelationFilter, PackageWhereInput> | null
  }

  export type StakeholderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    streetAddress?: SortOrder
    mailingAddress?: SortOrder
    phoneNumber?: SortOrder
    isPerson?: SortOrder
    stakeholderComments?: SortOrder
    stakeholderStatus?: SortOrder
    contacted?: SortOrder
    consultation?: SortOrder
    attempts?: SortOrder
    email?: SortOrder
    followUp?: SortOrder
    projectId?: SortOrder
    packageId?: SortOrderInput | SortOrder
    projects?: ProjectOrderByWithRelationInput
    tractRecords?: TractRecordOrderByRelationAggregateInput
    package?: PackageOrderByWithRelationInput
  }

  export type StakeholderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    packageId?: number
    AND?: StakeholderWhereInput | StakeholderWhereInput[]
    OR?: StakeholderWhereInput[]
    NOT?: StakeholderWhereInput | StakeholderWhereInput[]
    name?: StringFilter<"Stakeholder"> | string
    streetAddress?: StringFilter<"Stakeholder"> | string
    mailingAddress?: StringFilter<"Stakeholder"> | string
    phoneNumber?: StringFilter<"Stakeholder"> | string
    isPerson?: StringFilter<"Stakeholder"> | string
    stakeholderComments?: StringFilter<"Stakeholder"> | string
    stakeholderStatus?: StringFilter<"Stakeholder"> | string
    contacted?: StringFilter<"Stakeholder"> | string
    consultation?: StringFilter<"Stakeholder"> | string
    attempts?: StringFilter<"Stakeholder"> | string
    email?: StringFilter<"Stakeholder"> | string
    followUp?: StringFilter<"Stakeholder"> | string
    projectId?: IntFilter<"Stakeholder"> | number
    projects?: XOR<ProjectRelationFilter, ProjectWhereInput>
    tractRecords?: TractRecordListRelationFilter
    package?: XOR<PackageNullableRelationFilter, PackageWhereInput> | null
  }, "id" | "id" | "packageId">

  export type StakeholderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    streetAddress?: SortOrder
    mailingAddress?: SortOrder
    phoneNumber?: SortOrder
    isPerson?: SortOrder
    stakeholderComments?: SortOrder
    stakeholderStatus?: SortOrder
    contacted?: SortOrder
    consultation?: SortOrder
    attempts?: SortOrder
    email?: SortOrder
    followUp?: SortOrder
    projectId?: SortOrder
    packageId?: SortOrderInput | SortOrder
    _count?: StakeholderCountOrderByAggregateInput
    _avg?: StakeholderAvgOrderByAggregateInput
    _max?: StakeholderMaxOrderByAggregateInput
    _min?: StakeholderMinOrderByAggregateInput
    _sum?: StakeholderSumOrderByAggregateInput
  }

  export type StakeholderScalarWhereWithAggregatesInput = {
    AND?: StakeholderScalarWhereWithAggregatesInput | StakeholderScalarWhereWithAggregatesInput[]
    OR?: StakeholderScalarWhereWithAggregatesInput[]
    NOT?: StakeholderScalarWhereWithAggregatesInput | StakeholderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stakeholder"> | number
    name?: StringWithAggregatesFilter<"Stakeholder"> | string
    streetAddress?: StringWithAggregatesFilter<"Stakeholder"> | string
    mailingAddress?: StringWithAggregatesFilter<"Stakeholder"> | string
    phoneNumber?: StringWithAggregatesFilter<"Stakeholder"> | string
    isPerson?: StringWithAggregatesFilter<"Stakeholder"> | string
    stakeholderComments?: StringWithAggregatesFilter<"Stakeholder"> | string
    stakeholderStatus?: StringWithAggregatesFilter<"Stakeholder"> | string
    contacted?: StringWithAggregatesFilter<"Stakeholder"> | string
    consultation?: StringWithAggregatesFilter<"Stakeholder"> | string
    attempts?: StringWithAggregatesFilter<"Stakeholder"> | string
    email?: StringWithAggregatesFilter<"Stakeholder"> | string
    followUp?: StringWithAggregatesFilter<"Stakeholder"> | string
    projectId?: IntWithAggregatesFilter<"Stakeholder"> | number
    packageId?: IntNullableWithAggregatesFilter<"Stakeholder"> | number | null
  }

  export type TractRecordWhereInput = {
    AND?: TractRecordWhereInput | TractRecordWhereInput[]
    OR?: TractRecordWhereInput[]
    NOT?: TractRecordWhereInput | TractRecordWhereInput[]
    id?: IntFilter<"TractRecord"> | number
    tract?: IntFilter<"TractRecord"> | number
    position?: IntFilter<"TractRecord"> | number
    pin?: StringFilter<"TractRecord"> | string
    interest?: StringFilter<"TractRecord"> | string
    structure?: StringFilter<"TractRecord"> | string
    occupants?: IntFilter<"TractRecord"> | number
    worksLand?: StringFilter<"TractRecord"> | string
    tractComments?: StringFilter<"TractRecord"> | string
    pipelineStatus?: StringFilter<"TractRecord"> | string
    commodity?: StringFilter<"TractRecord"> | string
    pageNumber?: StringFilter<"TractRecord"> | string
    keepdelete?: StringFilter<"TractRecord"> | string
    stakeholderId?: IntFilter<"TractRecord"> | number
    stakeholder?: XOR<StakeholderRelationFilter, StakeholderWhereInput>
  }

  export type TractRecordOrderByWithRelationInput = {
    id?: SortOrder
    tract?: SortOrder
    position?: SortOrder
    pin?: SortOrder
    interest?: SortOrder
    structure?: SortOrder
    occupants?: SortOrder
    worksLand?: SortOrder
    tractComments?: SortOrder
    pipelineStatus?: SortOrder
    commodity?: SortOrder
    pageNumber?: SortOrder
    keepdelete?: SortOrder
    stakeholderId?: SortOrder
    stakeholder?: StakeholderOrderByWithRelationInput
  }

  export type TractRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TractRecordWhereInput | TractRecordWhereInput[]
    OR?: TractRecordWhereInput[]
    NOT?: TractRecordWhereInput | TractRecordWhereInput[]
    tract?: IntFilter<"TractRecord"> | number
    position?: IntFilter<"TractRecord"> | number
    pin?: StringFilter<"TractRecord"> | string
    interest?: StringFilter<"TractRecord"> | string
    structure?: StringFilter<"TractRecord"> | string
    occupants?: IntFilter<"TractRecord"> | number
    worksLand?: StringFilter<"TractRecord"> | string
    tractComments?: StringFilter<"TractRecord"> | string
    pipelineStatus?: StringFilter<"TractRecord"> | string
    commodity?: StringFilter<"TractRecord"> | string
    pageNumber?: StringFilter<"TractRecord"> | string
    keepdelete?: StringFilter<"TractRecord"> | string
    stakeholderId?: IntFilter<"TractRecord"> | number
    stakeholder?: XOR<StakeholderRelationFilter, StakeholderWhereInput>
  }, "id" | "id">

  export type TractRecordOrderByWithAggregationInput = {
    id?: SortOrder
    tract?: SortOrder
    position?: SortOrder
    pin?: SortOrder
    interest?: SortOrder
    structure?: SortOrder
    occupants?: SortOrder
    worksLand?: SortOrder
    tractComments?: SortOrder
    pipelineStatus?: SortOrder
    commodity?: SortOrder
    pageNumber?: SortOrder
    keepdelete?: SortOrder
    stakeholderId?: SortOrder
    _count?: TractRecordCountOrderByAggregateInput
    _avg?: TractRecordAvgOrderByAggregateInput
    _max?: TractRecordMaxOrderByAggregateInput
    _min?: TractRecordMinOrderByAggregateInput
    _sum?: TractRecordSumOrderByAggregateInput
  }

  export type TractRecordScalarWhereWithAggregatesInput = {
    AND?: TractRecordScalarWhereWithAggregatesInput | TractRecordScalarWhereWithAggregatesInput[]
    OR?: TractRecordScalarWhereWithAggregatesInput[]
    NOT?: TractRecordScalarWhereWithAggregatesInput | TractRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TractRecord"> | number
    tract?: IntWithAggregatesFilter<"TractRecord"> | number
    position?: IntWithAggregatesFilter<"TractRecord"> | number
    pin?: StringWithAggregatesFilter<"TractRecord"> | string
    interest?: StringWithAggregatesFilter<"TractRecord"> | string
    structure?: StringWithAggregatesFilter<"TractRecord"> | string
    occupants?: IntWithAggregatesFilter<"TractRecord"> | number
    worksLand?: StringWithAggregatesFilter<"TractRecord"> | string
    tractComments?: StringWithAggregatesFilter<"TractRecord"> | string
    pipelineStatus?: StringWithAggregatesFilter<"TractRecord"> | string
    commodity?: StringWithAggregatesFilter<"TractRecord"> | string
    pageNumber?: StringWithAggregatesFilter<"TractRecord"> | string
    keepdelete?: StringWithAggregatesFilter<"TractRecord"> | string
    stakeholderId?: IntWithAggregatesFilter<"TractRecord"> | number
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    id?: IntFilter<"Delivery"> | number
    date?: StringNullableFilter<"Delivery"> | string | null
    delivery_method?: StringFilter<"Delivery"> | string
    carrier?: StringNullableFilter<"Delivery"> | string | null
    route?: StringFilter<"Delivery"> | string
    destination?: StringFilter<"Delivery"> | string
    completed?: BoolFilter<"Delivery"> | boolean
    notes?: StringFilter<"Delivery"> | string
    projectId?: IntFilter<"Delivery"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    packages?: PackageListRelationFilter
  }

  export type DeliveryOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    delivery_method?: SortOrder
    carrier?: SortOrderInput | SortOrder
    route?: SortOrder
    destination?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    packages?: PackageOrderByRelationAggregateInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    date?: StringNullableFilter<"Delivery"> | string | null
    delivery_method?: StringFilter<"Delivery"> | string
    carrier?: StringNullableFilter<"Delivery"> | string | null
    route?: StringFilter<"Delivery"> | string
    destination?: StringFilter<"Delivery"> | string
    completed?: BoolFilter<"Delivery"> | boolean
    notes?: StringFilter<"Delivery"> | string
    projectId?: IntFilter<"Delivery"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    packages?: PackageListRelationFilter
  }, "id" | "id">

  export type DeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    delivery_method?: SortOrder
    carrier?: SortOrderInput | SortOrder
    route?: SortOrder
    destination?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Delivery"> | number
    date?: StringNullableWithAggregatesFilter<"Delivery"> | string | null
    delivery_method?: StringWithAggregatesFilter<"Delivery"> | string
    carrier?: StringNullableWithAggregatesFilter<"Delivery"> | string | null
    route?: StringWithAggregatesFilter<"Delivery"> | string
    destination?: StringWithAggregatesFilter<"Delivery"> | string
    completed?: BoolWithAggregatesFilter<"Delivery"> | boolean
    notes?: StringWithAggregatesFilter<"Delivery"> | string
    projectId?: IntWithAggregatesFilter<"Delivery"> | number
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: IntFilter<"Package"> | number
    packageTypeId?: IntNullableFilter<"Package"> | number | null
    deliveryId?: IntFilter<"Package"> | number
    stakeholderId?: IntFilter<"Package"> | number
    packageType?: XOR<PackageTypeNullableRelationFilter, PackageTypeWhereInput> | null
    delivery?: XOR<DeliveryRelationFilter, DeliveryWhereInput>
    stakeholder?: XOR<StakeholderRelationFilter, StakeholderWhereInput>
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    packageTypeId?: SortOrderInput | SortOrder
    deliveryId?: SortOrder
    stakeholderId?: SortOrder
    packageType?: PackageTypeOrderByWithRelationInput
    delivery?: DeliveryOrderByWithRelationInput
    stakeholder?: StakeholderOrderByWithRelationInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    stakeholderId?: number
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    packageTypeId?: IntNullableFilter<"Package"> | number | null
    deliveryId?: IntFilter<"Package"> | number
    packageType?: XOR<PackageTypeNullableRelationFilter, PackageTypeWhereInput> | null
    delivery?: XOR<DeliveryRelationFilter, DeliveryWhereInput>
    stakeholder?: XOR<StakeholderRelationFilter, StakeholderWhereInput>
  }, "id" | "id" | "stakeholderId">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    packageTypeId?: SortOrderInput | SortOrder
    deliveryId?: SortOrder
    stakeholderId?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Package"> | number
    packageTypeId?: IntNullableWithAggregatesFilter<"Package"> | number | null
    deliveryId?: IntWithAggregatesFilter<"Package"> | number
    stakeholderId?: IntWithAggregatesFilter<"Package"> | number
  }

  export type PackageTypeWhereInput = {
    AND?: PackageTypeWhereInput | PackageTypeWhereInput[]
    OR?: PackageTypeWhereInput[]
    NOT?: PackageTypeWhereInput | PackageTypeWhereInput[]
    id?: IntFilter<"PackageType"> | number
    name?: StringFilter<"PackageType"> | string
    notes?: StringFilter<"PackageType"> | string
    projectId?: IntFilter<"PackageType"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    packages?: PackageListRelationFilter
    items?: PackageItemListRelationFilter
  }

  export type PackageTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    packages?: PackageOrderByRelationAggregateInput
    items?: PackageItemOrderByRelationAggregateInput
  }

  export type PackageTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PackageTypeWhereInput | PackageTypeWhereInput[]
    OR?: PackageTypeWhereInput[]
    NOT?: PackageTypeWhereInput | PackageTypeWhereInput[]
    name?: StringFilter<"PackageType"> | string
    notes?: StringFilter<"PackageType"> | string
    projectId?: IntFilter<"PackageType"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    packages?: PackageListRelationFilter
    items?: PackageItemListRelationFilter
  }, "id" | "id">

  export type PackageTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
    _count?: PackageTypeCountOrderByAggregateInput
    _avg?: PackageTypeAvgOrderByAggregateInput
    _max?: PackageTypeMaxOrderByAggregateInput
    _min?: PackageTypeMinOrderByAggregateInput
    _sum?: PackageTypeSumOrderByAggregateInput
  }

  export type PackageTypeScalarWhereWithAggregatesInput = {
    AND?: PackageTypeScalarWhereWithAggregatesInput | PackageTypeScalarWhereWithAggregatesInput[]
    OR?: PackageTypeScalarWhereWithAggregatesInput[]
    NOT?: PackageTypeScalarWhereWithAggregatesInput | PackageTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PackageType"> | number
    name?: StringWithAggregatesFilter<"PackageType"> | string
    notes?: StringWithAggregatesFilter<"PackageType"> | string
    projectId?: IntWithAggregatesFilter<"PackageType"> | number
  }

  export type PackageItemWhereInput = {
    AND?: PackageItemWhereInput | PackageItemWhereInput[]
    OR?: PackageItemWhereInput[]
    NOT?: PackageItemWhereInput | PackageItemWhereInput[]
    id?: IntFilter<"PackageItem"> | number
    packageTypeId?: IntFilter<"PackageItem"> | number
    quantity?: IntFilter<"PackageItem"> | number
    itemId?: IntFilter<"PackageItem"> | number
    packageType?: XOR<PackageTypeRelationFilter, PackageTypeWhereInput>
    item?: XOR<ItemRelationFilter, ItemWhereInput>
  }

  export type PackageItemOrderByWithRelationInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    quantity?: SortOrder
    itemId?: SortOrder
    packageType?: PackageTypeOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type PackageItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PackageItemWhereInput | PackageItemWhereInput[]
    OR?: PackageItemWhereInput[]
    NOT?: PackageItemWhereInput | PackageItemWhereInput[]
    packageTypeId?: IntFilter<"PackageItem"> | number
    quantity?: IntFilter<"PackageItem"> | number
    itemId?: IntFilter<"PackageItem"> | number
    packageType?: XOR<PackageTypeRelationFilter, PackageTypeWhereInput>
    item?: XOR<ItemRelationFilter, ItemWhereInput>
  }, "id" | "id">

  export type PackageItemOrderByWithAggregationInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    quantity?: SortOrder
    itemId?: SortOrder
    _count?: PackageItemCountOrderByAggregateInput
    _avg?: PackageItemAvgOrderByAggregateInput
    _max?: PackageItemMaxOrderByAggregateInput
    _min?: PackageItemMinOrderByAggregateInput
    _sum?: PackageItemSumOrderByAggregateInput
  }

  export type PackageItemScalarWhereWithAggregatesInput = {
    AND?: PackageItemScalarWhereWithAggregatesInput | PackageItemScalarWhereWithAggregatesInput[]
    OR?: PackageItemScalarWhereWithAggregatesInput[]
    NOT?: PackageItemScalarWhereWithAggregatesInput | PackageItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PackageItem"> | number
    packageTypeId?: IntWithAggregatesFilter<"PackageItem"> | number
    quantity?: IntWithAggregatesFilter<"PackageItem"> | number
    itemId?: IntWithAggregatesFilter<"PackageItem"> | number
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    image?: StringFilter<"Item"> | string
    quantity?: IntFilter<"Item"> | number
    projectId?: IntFilter<"Item"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    packageItems?: PackageItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    packageItems?: PackageItemOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    image?: StringFilter<"Item"> | string
    quantity?: IntFilter<"Item"> | number
    projectId?: IntFilter<"Item"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    packageItems?: PackageItemListRelationFilter
  }, "id" | "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    projectId?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    image?: StringWithAggregatesFilter<"Item"> | string
    quantity?: IntWithAggregatesFilter<"Item"> | number
    projectId?: IntWithAggregatesFilter<"Item"> | number
  }

  export type UserCreateInput = {
    isAdmin?: boolean
    username: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    isAdmin?: boolean
    username: string
    password: string
  }

  export type UserUpdateInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    isAdmin?: boolean
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    name: string
    year: number
    notes: string
    surveyLink: string
    stakeholders?: StakeholderCreateNestedManyWithoutProjectsInput
    deliveries?: DeliveryCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    PackageType?: PackageTypeCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    year: number
    notes: string
    surveyLink: string
    stakeholders?: StakeholderUncheckedCreateNestedManyWithoutProjectsInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    PackageType?: PackageTypeUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    stakeholders?: StakeholderUpdateManyWithoutProjectsNestedInput
    deliveries?: DeliveryUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    PackageType?: PackageTypeUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    stakeholders?: StakeholderUncheckedUpdateManyWithoutProjectsNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    PackageType?: PackageTypeUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    year: number
    notes: string
    surveyLink: string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
  }

  export type StakeholderCreateInput = {
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    packageId?: number | null
    projects: ProjectCreateNestedOneWithoutStakeholdersInput
    tractRecords?: TractRecordCreateNestedManyWithoutStakeholderInput
    package?: PackageCreateNestedOneWithoutStakeholderInput
  }

  export type StakeholderUncheckedCreateInput = {
    id?: number
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    projectId: number
    packageId?: number | null
    tractRecords?: TractRecordUncheckedCreateNestedManyWithoutStakeholderInput
    package?: PackageUncheckedCreateNestedOneWithoutStakeholderInput
  }

  export type StakeholderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    projects?: ProjectUpdateOneRequiredWithoutStakeholdersNestedInput
    tractRecords?: TractRecordUpdateManyWithoutStakeholderNestedInput
    package?: PackageUpdateOneWithoutStakeholderNestedInput
  }

  export type StakeholderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    tractRecords?: TractRecordUncheckedUpdateManyWithoutStakeholderNestedInput
    package?: PackageUncheckedUpdateOneWithoutStakeholderNestedInput
  }

  export type StakeholderCreateManyInput = {
    id?: number
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    projectId: number
    packageId?: number | null
  }

  export type StakeholderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StakeholderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TractRecordCreateInput = {
    tract: number
    position: number
    pin: string
    interest: string
    structure: string
    occupants: number
    worksLand: string
    tractComments: string
    pipelineStatus: string
    commodity: string
    pageNumber: string
    keepdelete: string
    stakeholder: StakeholderCreateNestedOneWithoutTractRecordsInput
  }

  export type TractRecordUncheckedCreateInput = {
    id?: number
    tract: number
    position: number
    pin: string
    interest: string
    structure: string
    occupants: number
    worksLand: string
    tractComments: string
    pipelineStatus: string
    commodity: string
    pageNumber: string
    keepdelete: string
    stakeholderId: number
  }

  export type TractRecordUpdateInput = {
    tract?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    pin?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    structure?: StringFieldUpdateOperationsInput | string
    occupants?: IntFieldUpdateOperationsInput | number
    worksLand?: StringFieldUpdateOperationsInput | string
    tractComments?: StringFieldUpdateOperationsInput | string
    pipelineStatus?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    pageNumber?: StringFieldUpdateOperationsInput | string
    keepdelete?: StringFieldUpdateOperationsInput | string
    stakeholder?: StakeholderUpdateOneRequiredWithoutTractRecordsNestedInput
  }

  export type TractRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tract?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    pin?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    structure?: StringFieldUpdateOperationsInput | string
    occupants?: IntFieldUpdateOperationsInput | number
    worksLand?: StringFieldUpdateOperationsInput | string
    tractComments?: StringFieldUpdateOperationsInput | string
    pipelineStatus?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    pageNumber?: StringFieldUpdateOperationsInput | string
    keepdelete?: StringFieldUpdateOperationsInput | string
    stakeholderId?: IntFieldUpdateOperationsInput | number
  }

  export type TractRecordCreateManyInput = {
    id?: number
    tract: number
    position: number
    pin: string
    interest: string
    structure: string
    occupants: number
    worksLand: string
    tractComments: string
    pipelineStatus: string
    commodity: string
    pageNumber: string
    keepdelete: string
    stakeholderId: number
  }

  export type TractRecordUpdateManyMutationInput = {
    tract?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    pin?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    structure?: StringFieldUpdateOperationsInput | string
    occupants?: IntFieldUpdateOperationsInput | number
    worksLand?: StringFieldUpdateOperationsInput | string
    tractComments?: StringFieldUpdateOperationsInput | string
    pipelineStatus?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    pageNumber?: StringFieldUpdateOperationsInput | string
    keepdelete?: StringFieldUpdateOperationsInput | string
  }

  export type TractRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tract?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    pin?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    structure?: StringFieldUpdateOperationsInput | string
    occupants?: IntFieldUpdateOperationsInput | number
    worksLand?: StringFieldUpdateOperationsInput | string
    tractComments?: StringFieldUpdateOperationsInput | string
    pipelineStatus?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    pageNumber?: StringFieldUpdateOperationsInput | string
    keepdelete?: StringFieldUpdateOperationsInput | string
    stakeholderId?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveryCreateInput = {
    date?: string | null
    delivery_method: string
    carrier?: string | null
    route: string
    destination: string
    completed: boolean
    notes: string
    project: ProjectCreateNestedOneWithoutDeliveriesInput
    packages?: PackageCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateInput = {
    id?: number
    date?: string | null
    delivery_method: string
    carrier?: string | null
    route: string
    destination: string
    completed: boolean
    notes: string
    projectId: number
    packages?: PackageUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryUpdateInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_method?: StringFieldUpdateOperationsInput | string
    carrier?: NullableStringFieldUpdateOperationsInput | string | null
    route?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutDeliveriesNestedInput
    packages?: PackageUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_method?: StringFieldUpdateOperationsInput | string
    carrier?: NullableStringFieldUpdateOperationsInput | string | null
    route?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    packages?: PackageUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryCreateManyInput = {
    id?: number
    date?: string | null
    delivery_method: string
    carrier?: string | null
    route: string
    destination: string
    completed: boolean
    notes: string
    projectId: number
  }

  export type DeliveryUpdateManyMutationInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_method?: StringFieldUpdateOperationsInput | string
    carrier?: NullableStringFieldUpdateOperationsInput | string | null
    route?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_method?: StringFieldUpdateOperationsInput | string
    carrier?: NullableStringFieldUpdateOperationsInput | string | null
    route?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageCreateInput = {
    packageType?: PackageTypeCreateNestedOneWithoutPackagesInput
    delivery: DeliveryCreateNestedOneWithoutPackagesInput
    stakeholder: StakeholderCreateNestedOneWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: number
    packageTypeId?: number | null
    deliveryId: number
    stakeholderId: number
  }

  export type PackageUpdateInput = {
    packageType?: PackageTypeUpdateOneWithoutPackagesNestedInput
    delivery?: DeliveryUpdateOneRequiredWithoutPackagesNestedInput
    stakeholder?: StakeholderUpdateOneRequiredWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    deliveryId?: IntFieldUpdateOperationsInput | number
    stakeholderId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageCreateManyInput = {
    id?: number
    packageTypeId?: number | null
    deliveryId: number
    stakeholderId: number
  }

  export type PackageUpdateManyMutationInput = {

  }

  export type PackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    deliveryId?: IntFieldUpdateOperationsInput | number
    stakeholderId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageTypeCreateInput = {
    name: string
    notes: string
    project: ProjectCreateNestedOneWithoutPackageTypeInput
    packages?: PackageCreateNestedManyWithoutPackageTypeInput
    items?: PackageItemCreateNestedManyWithoutPackageTypeInput
  }

  export type PackageTypeUncheckedCreateInput = {
    id?: number
    name: string
    notes: string
    projectId: number
    packages?: PackageUncheckedCreateNestedManyWithoutPackageTypeInput
    items?: PackageItemUncheckedCreateNestedManyWithoutPackageTypeInput
  }

  export type PackageTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutPackageTypeNestedInput
    packages?: PackageUpdateManyWithoutPackageTypeNestedInput
    items?: PackageItemUpdateManyWithoutPackageTypeNestedInput
  }

  export type PackageTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    packages?: PackageUncheckedUpdateManyWithoutPackageTypeNestedInput
    items?: PackageItemUncheckedUpdateManyWithoutPackageTypeNestedInput
  }

  export type PackageTypeCreateManyInput = {
    id?: number
    name: string
    notes: string
    projectId: number
  }

  export type PackageTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type PackageTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageItemCreateInput = {
    quantity: number
    packageType: PackageTypeCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutPackageItemsInput
  }

  export type PackageItemUncheckedCreateInput = {
    id?: number
    packageTypeId: number
    quantity: number
    itemId: number
  }

  export type PackageItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    packageType?: PackageTypeUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutPackageItemsNestedInput
  }

  export type PackageItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageItemCreateManyInput = {
    id?: number
    packageTypeId: number
    quantity: number
    itemId: number
  }

  export type PackageItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PackageItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCreateInput = {
    name: string
    description: string
    image: string
    quantity: number
    project: ProjectCreateNestedOneWithoutItemsInput
    packageItems?: PackageItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    projectId: number
    packageItems?: PackageItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutItemsNestedInput
    packageItems?: PackageItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    packageItems?: PackageItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    projectId: number
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StakeholderListRelationFilter = {
    every?: StakeholderWhereInput
    some?: StakeholderWhereInput
    none?: StakeholderWhereInput
  }

  export type DeliveryListRelationFilter = {
    every?: DeliveryWhereInput
    some?: DeliveryWhereInput
    none?: DeliveryWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type PackageTypeListRelationFilter = {
    every?: PackageTypeWhereInput
    some?: PackageTypeWhereInput
    none?: PackageTypeWhereInput
  }

  export type StakeholderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    notes?: SortOrder
    surveyLink?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    notes?: SortOrder
    surveyLink?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    notes?: SortOrder
    surveyLink?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TractRecordListRelationFilter = {
    every?: TractRecordWhereInput
    some?: TractRecordWhereInput
    none?: TractRecordWhereInput
  }

  export type PackageNullableRelationFilter = {
    is?: PackageWhereInput | null
    isNot?: PackageWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TractRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StakeholderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    streetAddress?: SortOrder
    mailingAddress?: SortOrder
    phoneNumber?: SortOrder
    isPerson?: SortOrder
    stakeholderComments?: SortOrder
    stakeholderStatus?: SortOrder
    contacted?: SortOrder
    consultation?: SortOrder
    attempts?: SortOrder
    email?: SortOrder
    followUp?: SortOrder
    projectId?: SortOrder
    packageId?: SortOrder
  }

  export type StakeholderAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    packageId?: SortOrder
  }

  export type StakeholderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    streetAddress?: SortOrder
    mailingAddress?: SortOrder
    phoneNumber?: SortOrder
    isPerson?: SortOrder
    stakeholderComments?: SortOrder
    stakeholderStatus?: SortOrder
    contacted?: SortOrder
    consultation?: SortOrder
    attempts?: SortOrder
    email?: SortOrder
    followUp?: SortOrder
    projectId?: SortOrder
    packageId?: SortOrder
  }

  export type StakeholderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    streetAddress?: SortOrder
    mailingAddress?: SortOrder
    phoneNumber?: SortOrder
    isPerson?: SortOrder
    stakeholderComments?: SortOrder
    stakeholderStatus?: SortOrder
    contacted?: SortOrder
    consultation?: SortOrder
    attempts?: SortOrder
    email?: SortOrder
    followUp?: SortOrder
    projectId?: SortOrder
    packageId?: SortOrder
  }

  export type StakeholderSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    packageId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StakeholderRelationFilter = {
    is?: StakeholderWhereInput
    isNot?: StakeholderWhereInput
  }

  export type TractRecordCountOrderByAggregateInput = {
    id?: SortOrder
    tract?: SortOrder
    position?: SortOrder
    pin?: SortOrder
    interest?: SortOrder
    structure?: SortOrder
    occupants?: SortOrder
    worksLand?: SortOrder
    tractComments?: SortOrder
    pipelineStatus?: SortOrder
    commodity?: SortOrder
    pageNumber?: SortOrder
    keepdelete?: SortOrder
    stakeholderId?: SortOrder
  }

  export type TractRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    tract?: SortOrder
    position?: SortOrder
    occupants?: SortOrder
    stakeholderId?: SortOrder
  }

  export type TractRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    tract?: SortOrder
    position?: SortOrder
    pin?: SortOrder
    interest?: SortOrder
    structure?: SortOrder
    occupants?: SortOrder
    worksLand?: SortOrder
    tractComments?: SortOrder
    pipelineStatus?: SortOrder
    commodity?: SortOrder
    pageNumber?: SortOrder
    keepdelete?: SortOrder
    stakeholderId?: SortOrder
  }

  export type TractRecordMinOrderByAggregateInput = {
    id?: SortOrder
    tract?: SortOrder
    position?: SortOrder
    pin?: SortOrder
    interest?: SortOrder
    structure?: SortOrder
    occupants?: SortOrder
    worksLand?: SortOrder
    tractComments?: SortOrder
    pipelineStatus?: SortOrder
    commodity?: SortOrder
    pageNumber?: SortOrder
    keepdelete?: SortOrder
    stakeholderId?: SortOrder
  }

  export type TractRecordSumOrderByAggregateInput = {
    id?: SortOrder
    tract?: SortOrder
    position?: SortOrder
    occupants?: SortOrder
    stakeholderId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PackageListRelationFilter = {
    every?: PackageWhereInput
    some?: PackageWhereInput
    none?: PackageWhereInput
  }

  export type PackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    delivery_method?: SortOrder
    carrier?: SortOrder
    route?: SortOrder
    destination?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    delivery_method?: SortOrder
    carrier?: SortOrder
    route?: SortOrder
    destination?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    delivery_method?: SortOrder
    carrier?: SortOrder
    route?: SortOrder
    destination?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PackageTypeNullableRelationFilter = {
    is?: PackageTypeWhereInput | null
    isNot?: PackageTypeWhereInput | null
  }

  export type DeliveryRelationFilter = {
    is?: DeliveryWhereInput
    isNot?: DeliveryWhereInput
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    deliveryId?: SortOrder
    stakeholderId?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    deliveryId?: SortOrder
    stakeholderId?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    deliveryId?: SortOrder
    stakeholderId?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    deliveryId?: SortOrder
    stakeholderId?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    deliveryId?: SortOrder
    stakeholderId?: SortOrder
  }

  export type PackageItemListRelationFilter = {
    every?: PackageItemWhereInput
    some?: PackageItemWhereInput
    none?: PackageItemWhereInput
  }

  export type PackageItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
  }

  export type PackageTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type PackageTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
  }

  export type PackageTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    projectId?: SortOrder
  }

  export type PackageTypeSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type PackageTypeRelationFilter = {
    is?: PackageTypeWhereInput
    isNot?: PackageTypeWhereInput
  }

  export type ItemRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type PackageItemCountOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    quantity?: SortOrder
    itemId?: SortOrder
  }

  export type PackageItemAvgOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    quantity?: SortOrder
    itemId?: SortOrder
  }

  export type PackageItemMaxOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    quantity?: SortOrder
    itemId?: SortOrder
  }

  export type PackageItemMinOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    quantity?: SortOrder
    itemId?: SortOrder
  }

  export type PackageItemSumOrderByAggregateInput = {
    id?: SortOrder
    packageTypeId?: SortOrder
    quantity?: SortOrder
    itemId?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    projectId?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    projectId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    projectId?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    projectId?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    projectId?: SortOrder
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StakeholderCreateNestedManyWithoutProjectsInput = {
    create?: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput> | StakeholderCreateWithoutProjectsInput[] | StakeholderUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: StakeholderCreateOrConnectWithoutProjectsInput | StakeholderCreateOrConnectWithoutProjectsInput[]
    createMany?: StakeholderCreateManyProjectsInputEnvelope
    connect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
  }

  export type DeliveryCreateNestedManyWithoutProjectInput = {
    create?: XOR<DeliveryCreateWithoutProjectInput, DeliveryUncheckedCreateWithoutProjectInput> | DeliveryCreateWithoutProjectInput[] | DeliveryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProjectInput | DeliveryCreateOrConnectWithoutProjectInput[]
    createMany?: DeliveryCreateManyProjectInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutProjectInput = {
    create?: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput> | ItemCreateWithoutProjectInput[] | ItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProjectInput | ItemCreateOrConnectWithoutProjectInput[]
    createMany?: ItemCreateManyProjectInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type PackageTypeCreateNestedManyWithoutProjectInput = {
    create?: XOR<PackageTypeCreateWithoutProjectInput, PackageTypeUncheckedCreateWithoutProjectInput> | PackageTypeCreateWithoutProjectInput[] | PackageTypeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PackageTypeCreateOrConnectWithoutProjectInput | PackageTypeCreateOrConnectWithoutProjectInput[]
    createMany?: PackageTypeCreateManyProjectInputEnvelope
    connect?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
  }

  export type StakeholderUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput> | StakeholderCreateWithoutProjectsInput[] | StakeholderUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: StakeholderCreateOrConnectWithoutProjectsInput | StakeholderCreateOrConnectWithoutProjectsInput[]
    createMany?: StakeholderCreateManyProjectsInputEnvelope
    connect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DeliveryCreateWithoutProjectInput, DeliveryUncheckedCreateWithoutProjectInput> | DeliveryCreateWithoutProjectInput[] | DeliveryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProjectInput | DeliveryCreateOrConnectWithoutProjectInput[]
    createMany?: DeliveryCreateManyProjectInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput> | ItemCreateWithoutProjectInput[] | ItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProjectInput | ItemCreateOrConnectWithoutProjectInput[]
    createMany?: ItemCreateManyProjectInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type PackageTypeUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PackageTypeCreateWithoutProjectInput, PackageTypeUncheckedCreateWithoutProjectInput> | PackageTypeCreateWithoutProjectInput[] | PackageTypeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PackageTypeCreateOrConnectWithoutProjectInput | PackageTypeCreateOrConnectWithoutProjectInput[]
    createMany?: PackageTypeCreateManyProjectInputEnvelope
    connect?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
  }

  export type StakeholderUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput> | StakeholderCreateWithoutProjectsInput[] | StakeholderUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: StakeholderCreateOrConnectWithoutProjectsInput | StakeholderCreateOrConnectWithoutProjectsInput[]
    upsert?: StakeholderUpsertWithWhereUniqueWithoutProjectsInput | StakeholderUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: StakeholderCreateManyProjectsInputEnvelope
    set?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    disconnect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    delete?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    connect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    update?: StakeholderUpdateWithWhereUniqueWithoutProjectsInput | StakeholderUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: StakeholderUpdateManyWithWhereWithoutProjectsInput | StakeholderUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: StakeholderScalarWhereInput | StakeholderScalarWhereInput[]
  }

  export type DeliveryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DeliveryCreateWithoutProjectInput, DeliveryUncheckedCreateWithoutProjectInput> | DeliveryCreateWithoutProjectInput[] | DeliveryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProjectInput | DeliveryCreateOrConnectWithoutProjectInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutProjectInput | DeliveryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DeliveryCreateManyProjectInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutProjectInput | DeliveryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutProjectInput | DeliveryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput> | ItemCreateWithoutProjectInput[] | ItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProjectInput | ItemCreateOrConnectWithoutProjectInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutProjectInput | ItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ItemCreateManyProjectInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutProjectInput | ItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutProjectInput | ItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type PackageTypeUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PackageTypeCreateWithoutProjectInput, PackageTypeUncheckedCreateWithoutProjectInput> | PackageTypeCreateWithoutProjectInput[] | PackageTypeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PackageTypeCreateOrConnectWithoutProjectInput | PackageTypeCreateOrConnectWithoutProjectInput[]
    upsert?: PackageTypeUpsertWithWhereUniqueWithoutProjectInput | PackageTypeUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PackageTypeCreateManyProjectInputEnvelope
    set?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
    disconnect?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
    delete?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
    connect?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
    update?: PackageTypeUpdateWithWhereUniqueWithoutProjectInput | PackageTypeUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PackageTypeUpdateManyWithWhereWithoutProjectInput | PackageTypeUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PackageTypeScalarWhereInput | PackageTypeScalarWhereInput[]
  }

  export type StakeholderUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput> | StakeholderCreateWithoutProjectsInput[] | StakeholderUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: StakeholderCreateOrConnectWithoutProjectsInput | StakeholderCreateOrConnectWithoutProjectsInput[]
    upsert?: StakeholderUpsertWithWhereUniqueWithoutProjectsInput | StakeholderUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: StakeholderCreateManyProjectsInputEnvelope
    set?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    disconnect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    delete?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    connect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    update?: StakeholderUpdateWithWhereUniqueWithoutProjectsInput | StakeholderUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: StakeholderUpdateManyWithWhereWithoutProjectsInput | StakeholderUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: StakeholderScalarWhereInput | StakeholderScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DeliveryCreateWithoutProjectInput, DeliveryUncheckedCreateWithoutProjectInput> | DeliveryCreateWithoutProjectInput[] | DeliveryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProjectInput | DeliveryCreateOrConnectWithoutProjectInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutProjectInput | DeliveryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DeliveryCreateManyProjectInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutProjectInput | DeliveryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutProjectInput | DeliveryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput> | ItemCreateWithoutProjectInput[] | ItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProjectInput | ItemCreateOrConnectWithoutProjectInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutProjectInput | ItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ItemCreateManyProjectInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutProjectInput | ItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutProjectInput | ItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type PackageTypeUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PackageTypeCreateWithoutProjectInput, PackageTypeUncheckedCreateWithoutProjectInput> | PackageTypeCreateWithoutProjectInput[] | PackageTypeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PackageTypeCreateOrConnectWithoutProjectInput | PackageTypeCreateOrConnectWithoutProjectInput[]
    upsert?: PackageTypeUpsertWithWhereUniqueWithoutProjectInput | PackageTypeUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PackageTypeCreateManyProjectInputEnvelope
    set?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
    disconnect?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
    delete?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
    connect?: PackageTypeWhereUniqueInput | PackageTypeWhereUniqueInput[]
    update?: PackageTypeUpdateWithWhereUniqueWithoutProjectInput | PackageTypeUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PackageTypeUpdateManyWithWhereWithoutProjectInput | PackageTypeUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PackageTypeScalarWhereInput | PackageTypeScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutStakeholdersInput = {
    create?: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStakeholdersInput
    connect?: ProjectWhereUniqueInput
  }

  export type TractRecordCreateNestedManyWithoutStakeholderInput = {
    create?: XOR<TractRecordCreateWithoutStakeholderInput, TractRecordUncheckedCreateWithoutStakeholderInput> | TractRecordCreateWithoutStakeholderInput[] | TractRecordUncheckedCreateWithoutStakeholderInput[]
    connectOrCreate?: TractRecordCreateOrConnectWithoutStakeholderInput | TractRecordCreateOrConnectWithoutStakeholderInput[]
    createMany?: TractRecordCreateManyStakeholderInputEnvelope
    connect?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
  }

  export type PackageCreateNestedOneWithoutStakeholderInput = {
    create?: XOR<PackageCreateWithoutStakeholderInput, PackageUncheckedCreateWithoutStakeholderInput>
    connectOrCreate?: PackageCreateOrConnectWithoutStakeholderInput
    connect?: PackageWhereUniqueInput
  }

  export type TractRecordUncheckedCreateNestedManyWithoutStakeholderInput = {
    create?: XOR<TractRecordCreateWithoutStakeholderInput, TractRecordUncheckedCreateWithoutStakeholderInput> | TractRecordCreateWithoutStakeholderInput[] | TractRecordUncheckedCreateWithoutStakeholderInput[]
    connectOrCreate?: TractRecordCreateOrConnectWithoutStakeholderInput | TractRecordCreateOrConnectWithoutStakeholderInput[]
    createMany?: TractRecordCreateManyStakeholderInputEnvelope
    connect?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedOneWithoutStakeholderInput = {
    create?: XOR<PackageCreateWithoutStakeholderInput, PackageUncheckedCreateWithoutStakeholderInput>
    connectOrCreate?: PackageCreateOrConnectWithoutStakeholderInput
    connect?: PackageWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutStakeholdersNestedInput = {
    create?: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStakeholdersInput
    upsert?: ProjectUpsertWithoutStakeholdersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutStakeholdersInput, ProjectUpdateWithoutStakeholdersInput>, ProjectUncheckedUpdateWithoutStakeholdersInput>
  }

  export type TractRecordUpdateManyWithoutStakeholderNestedInput = {
    create?: XOR<TractRecordCreateWithoutStakeholderInput, TractRecordUncheckedCreateWithoutStakeholderInput> | TractRecordCreateWithoutStakeholderInput[] | TractRecordUncheckedCreateWithoutStakeholderInput[]
    connectOrCreate?: TractRecordCreateOrConnectWithoutStakeholderInput | TractRecordCreateOrConnectWithoutStakeholderInput[]
    upsert?: TractRecordUpsertWithWhereUniqueWithoutStakeholderInput | TractRecordUpsertWithWhereUniqueWithoutStakeholderInput[]
    createMany?: TractRecordCreateManyStakeholderInputEnvelope
    set?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
    disconnect?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
    delete?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
    connect?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
    update?: TractRecordUpdateWithWhereUniqueWithoutStakeholderInput | TractRecordUpdateWithWhereUniqueWithoutStakeholderInput[]
    updateMany?: TractRecordUpdateManyWithWhereWithoutStakeholderInput | TractRecordUpdateManyWithWhereWithoutStakeholderInput[]
    deleteMany?: TractRecordScalarWhereInput | TractRecordScalarWhereInput[]
  }

  export type PackageUpdateOneWithoutStakeholderNestedInput = {
    create?: XOR<PackageCreateWithoutStakeholderInput, PackageUncheckedCreateWithoutStakeholderInput>
    connectOrCreate?: PackageCreateOrConnectWithoutStakeholderInput
    upsert?: PackageUpsertWithoutStakeholderInput
    disconnect?: PackageWhereInput | boolean
    delete?: PackageWhereInput | boolean
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutStakeholderInput, PackageUpdateWithoutStakeholderInput>, PackageUncheckedUpdateWithoutStakeholderInput>
  }

  export type TractRecordUncheckedUpdateManyWithoutStakeholderNestedInput = {
    create?: XOR<TractRecordCreateWithoutStakeholderInput, TractRecordUncheckedCreateWithoutStakeholderInput> | TractRecordCreateWithoutStakeholderInput[] | TractRecordUncheckedCreateWithoutStakeholderInput[]
    connectOrCreate?: TractRecordCreateOrConnectWithoutStakeholderInput | TractRecordCreateOrConnectWithoutStakeholderInput[]
    upsert?: TractRecordUpsertWithWhereUniqueWithoutStakeholderInput | TractRecordUpsertWithWhereUniqueWithoutStakeholderInput[]
    createMany?: TractRecordCreateManyStakeholderInputEnvelope
    set?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
    disconnect?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
    delete?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
    connect?: TractRecordWhereUniqueInput | TractRecordWhereUniqueInput[]
    update?: TractRecordUpdateWithWhereUniqueWithoutStakeholderInput | TractRecordUpdateWithWhereUniqueWithoutStakeholderInput[]
    updateMany?: TractRecordUpdateManyWithWhereWithoutStakeholderInput | TractRecordUpdateManyWithWhereWithoutStakeholderInput[]
    deleteMany?: TractRecordScalarWhereInput | TractRecordScalarWhereInput[]
  }

  export type PackageUncheckedUpdateOneWithoutStakeholderNestedInput = {
    create?: XOR<PackageCreateWithoutStakeholderInput, PackageUncheckedCreateWithoutStakeholderInput>
    connectOrCreate?: PackageCreateOrConnectWithoutStakeholderInput
    upsert?: PackageUpsertWithoutStakeholderInput
    disconnect?: PackageWhereInput | boolean
    delete?: PackageWhereInput | boolean
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutStakeholderInput, PackageUpdateWithoutStakeholderInput>, PackageUncheckedUpdateWithoutStakeholderInput>
  }

  export type StakeholderCreateNestedOneWithoutTractRecordsInput = {
    create?: XOR<StakeholderCreateWithoutTractRecordsInput, StakeholderUncheckedCreateWithoutTractRecordsInput>
    connectOrCreate?: StakeholderCreateOrConnectWithoutTractRecordsInput
    connect?: StakeholderWhereUniqueInput
  }

  export type StakeholderUpdateOneRequiredWithoutTractRecordsNestedInput = {
    create?: XOR<StakeholderCreateWithoutTractRecordsInput, StakeholderUncheckedCreateWithoutTractRecordsInput>
    connectOrCreate?: StakeholderCreateOrConnectWithoutTractRecordsInput
    upsert?: StakeholderUpsertWithoutTractRecordsInput
    connect?: StakeholderWhereUniqueInput
    update?: XOR<XOR<StakeholderUpdateToOneWithWhereWithoutTractRecordsInput, StakeholderUpdateWithoutTractRecordsInput>, StakeholderUncheckedUpdateWithoutTractRecordsInput>
  }

  export type ProjectCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<ProjectCreateWithoutDeliveriesInput, ProjectUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDeliveriesInput
    connect?: ProjectWhereUniqueInput
  }

  export type PackageCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<PackageCreateWithoutDeliveryInput, PackageUncheckedCreateWithoutDeliveryInput> | PackageCreateWithoutDeliveryInput[] | PackageUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutDeliveryInput | PackageCreateOrConnectWithoutDeliveryInput[]
    createMany?: PackageCreateManyDeliveryInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<PackageCreateWithoutDeliveryInput, PackageUncheckedCreateWithoutDeliveryInput> | PackageCreateWithoutDeliveryInput[] | PackageUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutDeliveryInput | PackageCreateOrConnectWithoutDeliveryInput[]
    createMany?: PackageCreateManyDeliveryInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<ProjectCreateWithoutDeliveriesInput, ProjectUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDeliveriesInput
    upsert?: ProjectUpsertWithoutDeliveriesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDeliveriesInput, ProjectUpdateWithoutDeliveriesInput>, ProjectUncheckedUpdateWithoutDeliveriesInput>
  }

  export type PackageUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<PackageCreateWithoutDeliveryInput, PackageUncheckedCreateWithoutDeliveryInput> | PackageCreateWithoutDeliveryInput[] | PackageUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutDeliveryInput | PackageCreateOrConnectWithoutDeliveryInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutDeliveryInput | PackageUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: PackageCreateManyDeliveryInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutDeliveryInput | PackageUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutDeliveryInput | PackageUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<PackageCreateWithoutDeliveryInput, PackageUncheckedCreateWithoutDeliveryInput> | PackageCreateWithoutDeliveryInput[] | PackageUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutDeliveryInput | PackageCreateOrConnectWithoutDeliveryInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutDeliveryInput | PackageUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: PackageCreateManyDeliveryInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutDeliveryInput | PackageUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutDeliveryInput | PackageUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageTypeCreateNestedOneWithoutPackagesInput = {
    create?: XOR<PackageTypeCreateWithoutPackagesInput, PackageTypeUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: PackageTypeCreateOrConnectWithoutPackagesInput
    connect?: PackageTypeWhereUniqueInput
  }

  export type DeliveryCreateNestedOneWithoutPackagesInput = {
    create?: XOR<DeliveryCreateWithoutPackagesInput, DeliveryUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutPackagesInput
    connect?: DeliveryWhereUniqueInput
  }

  export type StakeholderCreateNestedOneWithoutPackageInput = {
    create?: XOR<StakeholderCreateWithoutPackageInput, StakeholderUncheckedCreateWithoutPackageInput>
    connectOrCreate?: StakeholderCreateOrConnectWithoutPackageInput
    connect?: StakeholderWhereUniqueInput
  }

  export type PackageTypeUpdateOneWithoutPackagesNestedInput = {
    create?: XOR<PackageTypeCreateWithoutPackagesInput, PackageTypeUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: PackageTypeCreateOrConnectWithoutPackagesInput
    upsert?: PackageTypeUpsertWithoutPackagesInput
    disconnect?: PackageTypeWhereInput | boolean
    delete?: PackageTypeWhereInput | boolean
    connect?: PackageTypeWhereUniqueInput
    update?: XOR<XOR<PackageTypeUpdateToOneWithWhereWithoutPackagesInput, PackageTypeUpdateWithoutPackagesInput>, PackageTypeUncheckedUpdateWithoutPackagesInput>
  }

  export type DeliveryUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<DeliveryCreateWithoutPackagesInput, DeliveryUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutPackagesInput
    upsert?: DeliveryUpsertWithoutPackagesInput
    connect?: DeliveryWhereUniqueInput
    update?: XOR<XOR<DeliveryUpdateToOneWithWhereWithoutPackagesInput, DeliveryUpdateWithoutPackagesInput>, DeliveryUncheckedUpdateWithoutPackagesInput>
  }

  export type StakeholderUpdateOneRequiredWithoutPackageNestedInput = {
    create?: XOR<StakeholderCreateWithoutPackageInput, StakeholderUncheckedCreateWithoutPackageInput>
    connectOrCreate?: StakeholderCreateOrConnectWithoutPackageInput
    upsert?: StakeholderUpsertWithoutPackageInput
    connect?: StakeholderWhereUniqueInput
    update?: XOR<XOR<StakeholderUpdateToOneWithWhereWithoutPackageInput, StakeholderUpdateWithoutPackageInput>, StakeholderUncheckedUpdateWithoutPackageInput>
  }

  export type ProjectCreateNestedOneWithoutPackageTypeInput = {
    create?: XOR<ProjectCreateWithoutPackageTypeInput, ProjectUncheckedCreateWithoutPackageTypeInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPackageTypeInput
    connect?: ProjectWhereUniqueInput
  }

  export type PackageCreateNestedManyWithoutPackageTypeInput = {
    create?: XOR<PackageCreateWithoutPackageTypeInput, PackageUncheckedCreateWithoutPackageTypeInput> | PackageCreateWithoutPackageTypeInput[] | PackageUncheckedCreateWithoutPackageTypeInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutPackageTypeInput | PackageCreateOrConnectWithoutPackageTypeInput[]
    createMany?: PackageCreateManyPackageTypeInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageItemCreateNestedManyWithoutPackageTypeInput = {
    create?: XOR<PackageItemCreateWithoutPackageTypeInput, PackageItemUncheckedCreateWithoutPackageTypeInput> | PackageItemCreateWithoutPackageTypeInput[] | PackageItemUncheckedCreateWithoutPackageTypeInput[]
    connectOrCreate?: PackageItemCreateOrConnectWithoutPackageTypeInput | PackageItemCreateOrConnectWithoutPackageTypeInput[]
    createMany?: PackageItemCreateManyPackageTypeInputEnvelope
    connect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutPackageTypeInput = {
    create?: XOR<PackageCreateWithoutPackageTypeInput, PackageUncheckedCreateWithoutPackageTypeInput> | PackageCreateWithoutPackageTypeInput[] | PackageUncheckedCreateWithoutPackageTypeInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutPackageTypeInput | PackageCreateOrConnectWithoutPackageTypeInput[]
    createMany?: PackageCreateManyPackageTypeInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageItemUncheckedCreateNestedManyWithoutPackageTypeInput = {
    create?: XOR<PackageItemCreateWithoutPackageTypeInput, PackageItemUncheckedCreateWithoutPackageTypeInput> | PackageItemCreateWithoutPackageTypeInput[] | PackageItemUncheckedCreateWithoutPackageTypeInput[]
    connectOrCreate?: PackageItemCreateOrConnectWithoutPackageTypeInput | PackageItemCreateOrConnectWithoutPackageTypeInput[]
    createMany?: PackageItemCreateManyPackageTypeInputEnvelope
    connect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutPackageTypeNestedInput = {
    create?: XOR<ProjectCreateWithoutPackageTypeInput, ProjectUncheckedCreateWithoutPackageTypeInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPackageTypeInput
    upsert?: ProjectUpsertWithoutPackageTypeInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPackageTypeInput, ProjectUpdateWithoutPackageTypeInput>, ProjectUncheckedUpdateWithoutPackageTypeInput>
  }

  export type PackageUpdateManyWithoutPackageTypeNestedInput = {
    create?: XOR<PackageCreateWithoutPackageTypeInput, PackageUncheckedCreateWithoutPackageTypeInput> | PackageCreateWithoutPackageTypeInput[] | PackageUncheckedCreateWithoutPackageTypeInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutPackageTypeInput | PackageCreateOrConnectWithoutPackageTypeInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutPackageTypeInput | PackageUpsertWithWhereUniqueWithoutPackageTypeInput[]
    createMany?: PackageCreateManyPackageTypeInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutPackageTypeInput | PackageUpdateWithWhereUniqueWithoutPackageTypeInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutPackageTypeInput | PackageUpdateManyWithWhereWithoutPackageTypeInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageItemUpdateManyWithoutPackageTypeNestedInput = {
    create?: XOR<PackageItemCreateWithoutPackageTypeInput, PackageItemUncheckedCreateWithoutPackageTypeInput> | PackageItemCreateWithoutPackageTypeInput[] | PackageItemUncheckedCreateWithoutPackageTypeInput[]
    connectOrCreate?: PackageItemCreateOrConnectWithoutPackageTypeInput | PackageItemCreateOrConnectWithoutPackageTypeInput[]
    upsert?: PackageItemUpsertWithWhereUniqueWithoutPackageTypeInput | PackageItemUpsertWithWhereUniqueWithoutPackageTypeInput[]
    createMany?: PackageItemCreateManyPackageTypeInputEnvelope
    set?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    disconnect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    delete?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    connect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    update?: PackageItemUpdateWithWhereUniqueWithoutPackageTypeInput | PackageItemUpdateWithWhereUniqueWithoutPackageTypeInput[]
    updateMany?: PackageItemUpdateManyWithWhereWithoutPackageTypeInput | PackageItemUpdateManyWithWhereWithoutPackageTypeInput[]
    deleteMany?: PackageItemScalarWhereInput | PackageItemScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutPackageTypeNestedInput = {
    create?: XOR<PackageCreateWithoutPackageTypeInput, PackageUncheckedCreateWithoutPackageTypeInput> | PackageCreateWithoutPackageTypeInput[] | PackageUncheckedCreateWithoutPackageTypeInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutPackageTypeInput | PackageCreateOrConnectWithoutPackageTypeInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutPackageTypeInput | PackageUpsertWithWhereUniqueWithoutPackageTypeInput[]
    createMany?: PackageCreateManyPackageTypeInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutPackageTypeInput | PackageUpdateWithWhereUniqueWithoutPackageTypeInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutPackageTypeInput | PackageUpdateManyWithWhereWithoutPackageTypeInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageItemUncheckedUpdateManyWithoutPackageTypeNestedInput = {
    create?: XOR<PackageItemCreateWithoutPackageTypeInput, PackageItemUncheckedCreateWithoutPackageTypeInput> | PackageItemCreateWithoutPackageTypeInput[] | PackageItemUncheckedCreateWithoutPackageTypeInput[]
    connectOrCreate?: PackageItemCreateOrConnectWithoutPackageTypeInput | PackageItemCreateOrConnectWithoutPackageTypeInput[]
    upsert?: PackageItemUpsertWithWhereUniqueWithoutPackageTypeInput | PackageItemUpsertWithWhereUniqueWithoutPackageTypeInput[]
    createMany?: PackageItemCreateManyPackageTypeInputEnvelope
    set?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    disconnect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    delete?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    connect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    update?: PackageItemUpdateWithWhereUniqueWithoutPackageTypeInput | PackageItemUpdateWithWhereUniqueWithoutPackageTypeInput[]
    updateMany?: PackageItemUpdateManyWithWhereWithoutPackageTypeInput | PackageItemUpdateManyWithWhereWithoutPackageTypeInput[]
    deleteMany?: PackageItemScalarWhereInput | PackageItemScalarWhereInput[]
  }

  export type PackageTypeCreateNestedOneWithoutItemsInput = {
    create?: XOR<PackageTypeCreateWithoutItemsInput, PackageTypeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PackageTypeCreateOrConnectWithoutItemsInput
    connect?: PackageTypeWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutPackageItemsInput = {
    create?: XOR<ItemCreateWithoutPackageItemsInput, ItemUncheckedCreateWithoutPackageItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPackageItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type PackageTypeUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PackageTypeCreateWithoutItemsInput, PackageTypeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PackageTypeCreateOrConnectWithoutItemsInput
    upsert?: PackageTypeUpsertWithoutItemsInput
    connect?: PackageTypeWhereUniqueInput
    update?: XOR<XOR<PackageTypeUpdateToOneWithWhereWithoutItemsInput, PackageTypeUpdateWithoutItemsInput>, PackageTypeUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutPackageItemsNestedInput = {
    create?: XOR<ItemCreateWithoutPackageItemsInput, ItemUncheckedCreateWithoutPackageItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPackageItemsInput
    upsert?: ItemUpsertWithoutPackageItemsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutPackageItemsInput, ItemUpdateWithoutPackageItemsInput>, ItemUncheckedUpdateWithoutPackageItemsInput>
  }

  export type ProjectCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemsInput
    connect?: ProjectWhereUniqueInput
  }

  export type PackageItemCreateNestedManyWithoutItemInput = {
    create?: XOR<PackageItemCreateWithoutItemInput, PackageItemUncheckedCreateWithoutItemInput> | PackageItemCreateWithoutItemInput[] | PackageItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PackageItemCreateOrConnectWithoutItemInput | PackageItemCreateOrConnectWithoutItemInput[]
    createMany?: PackageItemCreateManyItemInputEnvelope
    connect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
  }

  export type PackageItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<PackageItemCreateWithoutItemInput, PackageItemUncheckedCreateWithoutItemInput> | PackageItemCreateWithoutItemInput[] | PackageItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PackageItemCreateOrConnectWithoutItemInput | PackageItemCreateOrConnectWithoutItemInput[]
    createMany?: PackageItemCreateManyItemInputEnvelope
    connect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemsInput
    upsert?: ProjectUpsertWithoutItemsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutItemsInput, ProjectUpdateWithoutItemsInput>, ProjectUncheckedUpdateWithoutItemsInput>
  }

  export type PackageItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<PackageItemCreateWithoutItemInput, PackageItemUncheckedCreateWithoutItemInput> | PackageItemCreateWithoutItemInput[] | PackageItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PackageItemCreateOrConnectWithoutItemInput | PackageItemCreateOrConnectWithoutItemInput[]
    upsert?: PackageItemUpsertWithWhereUniqueWithoutItemInput | PackageItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: PackageItemCreateManyItemInputEnvelope
    set?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    disconnect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    delete?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    connect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    update?: PackageItemUpdateWithWhereUniqueWithoutItemInput | PackageItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: PackageItemUpdateManyWithWhereWithoutItemInput | PackageItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: PackageItemScalarWhereInput | PackageItemScalarWhereInput[]
  }

  export type PackageItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<PackageItemCreateWithoutItemInput, PackageItemUncheckedCreateWithoutItemInput> | PackageItemCreateWithoutItemInput[] | PackageItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PackageItemCreateOrConnectWithoutItemInput | PackageItemCreateOrConnectWithoutItemInput[]
    upsert?: PackageItemUpsertWithWhereUniqueWithoutItemInput | PackageItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: PackageItemCreateManyItemInputEnvelope
    set?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    disconnect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    delete?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    connect?: PackageItemWhereUniqueInput | PackageItemWhereUniqueInput[]
    update?: PackageItemUpdateWithWhereUniqueWithoutItemInput | PackageItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: PackageItemUpdateManyWithWhereWithoutItemInput | PackageItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: PackageItemScalarWhereInput | PackageItemScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StakeholderCreateWithoutProjectsInput = {
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    packageId?: number | null
    tractRecords?: TractRecordCreateNestedManyWithoutStakeholderInput
    package?: PackageCreateNestedOneWithoutStakeholderInput
  }

  export type StakeholderUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    packageId?: number | null
    tractRecords?: TractRecordUncheckedCreateNestedManyWithoutStakeholderInput
    package?: PackageUncheckedCreateNestedOneWithoutStakeholderInput
  }

  export type StakeholderCreateOrConnectWithoutProjectsInput = {
    where: StakeholderWhereUniqueInput
    create: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput>
  }

  export type StakeholderCreateManyProjectsInputEnvelope = {
    data: StakeholderCreateManyProjectsInput | StakeholderCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryCreateWithoutProjectInput = {
    date?: string | null
    delivery_method: string
    carrier?: string | null
    route: string
    destination: string
    completed: boolean
    notes: string
    packages?: PackageCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutProjectInput = {
    id?: number
    date?: string | null
    delivery_method: string
    carrier?: string | null
    route: string
    destination: string
    completed: boolean
    notes: string
    packages?: PackageUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryCreateOrConnectWithoutProjectInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutProjectInput, DeliveryUncheckedCreateWithoutProjectInput>
  }

  export type DeliveryCreateManyProjectInputEnvelope = {
    data: DeliveryCreateManyProjectInput | DeliveryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutProjectInput = {
    name: string
    description: string
    image: string
    quantity: number
    packageItems?: PackageItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    packageItems?: PackageItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutProjectInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput>
  }

  export type ItemCreateManyProjectInputEnvelope = {
    data: ItemCreateManyProjectInput | ItemCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PackageTypeCreateWithoutProjectInput = {
    name: string
    notes: string
    packages?: PackageCreateNestedManyWithoutPackageTypeInput
    items?: PackageItemCreateNestedManyWithoutPackageTypeInput
  }

  export type PackageTypeUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    notes: string
    packages?: PackageUncheckedCreateNestedManyWithoutPackageTypeInput
    items?: PackageItemUncheckedCreateNestedManyWithoutPackageTypeInput
  }

  export type PackageTypeCreateOrConnectWithoutProjectInput = {
    where: PackageTypeWhereUniqueInput
    create: XOR<PackageTypeCreateWithoutProjectInput, PackageTypeUncheckedCreateWithoutProjectInput>
  }

  export type PackageTypeCreateManyProjectInputEnvelope = {
    data: PackageTypeCreateManyProjectInput | PackageTypeCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type StakeholderUpsertWithWhereUniqueWithoutProjectsInput = {
    where: StakeholderWhereUniqueInput
    update: XOR<StakeholderUpdateWithoutProjectsInput, StakeholderUncheckedUpdateWithoutProjectsInput>
    create: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput>
  }

  export type StakeholderUpdateWithWhereUniqueWithoutProjectsInput = {
    where: StakeholderWhereUniqueInput
    data: XOR<StakeholderUpdateWithoutProjectsInput, StakeholderUncheckedUpdateWithoutProjectsInput>
  }

  export type StakeholderUpdateManyWithWhereWithoutProjectsInput = {
    where: StakeholderScalarWhereInput
    data: XOR<StakeholderUpdateManyMutationInput, StakeholderUncheckedUpdateManyWithoutProjectsInput>
  }

  export type StakeholderScalarWhereInput = {
    AND?: StakeholderScalarWhereInput | StakeholderScalarWhereInput[]
    OR?: StakeholderScalarWhereInput[]
    NOT?: StakeholderScalarWhereInput | StakeholderScalarWhereInput[]
    id?: IntFilter<"Stakeholder"> | number
    name?: StringFilter<"Stakeholder"> | string
    streetAddress?: StringFilter<"Stakeholder"> | string
    mailingAddress?: StringFilter<"Stakeholder"> | string
    phoneNumber?: StringFilter<"Stakeholder"> | string
    isPerson?: StringFilter<"Stakeholder"> | string
    stakeholderComments?: StringFilter<"Stakeholder"> | string
    stakeholderStatus?: StringFilter<"Stakeholder"> | string
    contacted?: StringFilter<"Stakeholder"> | string
    consultation?: StringFilter<"Stakeholder"> | string
    attempts?: StringFilter<"Stakeholder"> | string
    email?: StringFilter<"Stakeholder"> | string
    followUp?: StringFilter<"Stakeholder"> | string
    projectId?: IntFilter<"Stakeholder"> | number
    packageId?: IntNullableFilter<"Stakeholder"> | number | null
  }

  export type DeliveryUpsertWithWhereUniqueWithoutProjectInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutProjectInput, DeliveryUncheckedUpdateWithoutProjectInput>
    create: XOR<DeliveryCreateWithoutProjectInput, DeliveryUncheckedCreateWithoutProjectInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutProjectInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutProjectInput, DeliveryUncheckedUpdateWithoutProjectInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutProjectInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutProjectInput>
  }

  export type DeliveryScalarWhereInput = {
    AND?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    OR?: DeliveryScalarWhereInput[]
    NOT?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    id?: IntFilter<"Delivery"> | number
    date?: StringNullableFilter<"Delivery"> | string | null
    delivery_method?: StringFilter<"Delivery"> | string
    carrier?: StringNullableFilter<"Delivery"> | string | null
    route?: StringFilter<"Delivery"> | string
    destination?: StringFilter<"Delivery"> | string
    completed?: BoolFilter<"Delivery"> | boolean
    notes?: StringFilter<"Delivery"> | string
    projectId?: IntFilter<"Delivery"> | number
  }

  export type ItemUpsertWithWhereUniqueWithoutProjectInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutProjectInput, ItemUncheckedUpdateWithoutProjectInput>
    create: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutProjectInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutProjectInput, ItemUncheckedUpdateWithoutProjectInput>
  }

  export type ItemUpdateManyWithWhereWithoutProjectInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutProjectInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    image?: StringFilter<"Item"> | string
    quantity?: IntFilter<"Item"> | number
    projectId?: IntFilter<"Item"> | number
  }

  export type PackageTypeUpsertWithWhereUniqueWithoutProjectInput = {
    where: PackageTypeWhereUniqueInput
    update: XOR<PackageTypeUpdateWithoutProjectInput, PackageTypeUncheckedUpdateWithoutProjectInput>
    create: XOR<PackageTypeCreateWithoutProjectInput, PackageTypeUncheckedCreateWithoutProjectInput>
  }

  export type PackageTypeUpdateWithWhereUniqueWithoutProjectInput = {
    where: PackageTypeWhereUniqueInput
    data: XOR<PackageTypeUpdateWithoutProjectInput, PackageTypeUncheckedUpdateWithoutProjectInput>
  }

  export type PackageTypeUpdateManyWithWhereWithoutProjectInput = {
    where: PackageTypeScalarWhereInput
    data: XOR<PackageTypeUpdateManyMutationInput, PackageTypeUncheckedUpdateManyWithoutProjectInput>
  }

  export type PackageTypeScalarWhereInput = {
    AND?: PackageTypeScalarWhereInput | PackageTypeScalarWhereInput[]
    OR?: PackageTypeScalarWhereInput[]
    NOT?: PackageTypeScalarWhereInput | PackageTypeScalarWhereInput[]
    id?: IntFilter<"PackageType"> | number
    name?: StringFilter<"PackageType"> | string
    notes?: StringFilter<"PackageType"> | string
    projectId?: IntFilter<"PackageType"> | number
  }

  export type ProjectCreateWithoutStakeholdersInput = {
    name: string
    year: number
    notes: string
    surveyLink: string
    deliveries?: DeliveryCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    PackageType?: PackageTypeCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStakeholdersInput = {
    id?: number
    name: string
    year: number
    notes: string
    surveyLink: string
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    PackageType?: PackageTypeUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStakeholdersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput>
  }

  export type TractRecordCreateWithoutStakeholderInput = {
    tract: number
    position: number
    pin: string
    interest: string
    structure: string
    occupants: number
    worksLand: string
    tractComments: string
    pipelineStatus: string
    commodity: string
    pageNumber: string
    keepdelete: string
  }

  export type TractRecordUncheckedCreateWithoutStakeholderInput = {
    id?: number
    tract: number
    position: number
    pin: string
    interest: string
    structure: string
    occupants: number
    worksLand: string
    tractComments: string
    pipelineStatus: string
    commodity: string
    pageNumber: string
    keepdelete: string
  }

  export type TractRecordCreateOrConnectWithoutStakeholderInput = {
    where: TractRecordWhereUniqueInput
    create: XOR<TractRecordCreateWithoutStakeholderInput, TractRecordUncheckedCreateWithoutStakeholderInput>
  }

  export type TractRecordCreateManyStakeholderInputEnvelope = {
    data: TractRecordCreateManyStakeholderInput | TractRecordCreateManyStakeholderInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutStakeholderInput = {
    packageType?: PackageTypeCreateNestedOneWithoutPackagesInput
    delivery: DeliveryCreateNestedOneWithoutPackagesInput
  }

  export type PackageUncheckedCreateWithoutStakeholderInput = {
    id?: number
    packageTypeId?: number | null
    deliveryId: number
  }

  export type PackageCreateOrConnectWithoutStakeholderInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutStakeholderInput, PackageUncheckedCreateWithoutStakeholderInput>
  }

  export type ProjectUpsertWithoutStakeholdersInput = {
    update: XOR<ProjectUpdateWithoutStakeholdersInput, ProjectUncheckedUpdateWithoutStakeholdersInput>
    create: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutStakeholdersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutStakeholdersInput, ProjectUncheckedUpdateWithoutStakeholdersInput>
  }

  export type ProjectUpdateWithoutStakeholdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    deliveries?: DeliveryUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    PackageType?: PackageTypeUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStakeholdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    deliveries?: DeliveryUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    PackageType?: PackageTypeUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TractRecordUpsertWithWhereUniqueWithoutStakeholderInput = {
    where: TractRecordWhereUniqueInput
    update: XOR<TractRecordUpdateWithoutStakeholderInput, TractRecordUncheckedUpdateWithoutStakeholderInput>
    create: XOR<TractRecordCreateWithoutStakeholderInput, TractRecordUncheckedCreateWithoutStakeholderInput>
  }

  export type TractRecordUpdateWithWhereUniqueWithoutStakeholderInput = {
    where: TractRecordWhereUniqueInput
    data: XOR<TractRecordUpdateWithoutStakeholderInput, TractRecordUncheckedUpdateWithoutStakeholderInput>
  }

  export type TractRecordUpdateManyWithWhereWithoutStakeholderInput = {
    where: TractRecordScalarWhereInput
    data: XOR<TractRecordUpdateManyMutationInput, TractRecordUncheckedUpdateManyWithoutStakeholderInput>
  }

  export type TractRecordScalarWhereInput = {
    AND?: TractRecordScalarWhereInput | TractRecordScalarWhereInput[]
    OR?: TractRecordScalarWhereInput[]
    NOT?: TractRecordScalarWhereInput | TractRecordScalarWhereInput[]
    id?: IntFilter<"TractRecord"> | number
    tract?: IntFilter<"TractRecord"> | number
    position?: IntFilter<"TractRecord"> | number
    pin?: StringFilter<"TractRecord"> | string
    interest?: StringFilter<"TractRecord"> | string
    structure?: StringFilter<"TractRecord"> | string
    occupants?: IntFilter<"TractRecord"> | number
    worksLand?: StringFilter<"TractRecord"> | string
    tractComments?: StringFilter<"TractRecord"> | string
    pipelineStatus?: StringFilter<"TractRecord"> | string
    commodity?: StringFilter<"TractRecord"> | string
    pageNumber?: StringFilter<"TractRecord"> | string
    keepdelete?: StringFilter<"TractRecord"> | string
    stakeholderId?: IntFilter<"TractRecord"> | number
  }

  export type PackageUpsertWithoutStakeholderInput = {
    update: XOR<PackageUpdateWithoutStakeholderInput, PackageUncheckedUpdateWithoutStakeholderInput>
    create: XOR<PackageCreateWithoutStakeholderInput, PackageUncheckedCreateWithoutStakeholderInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutStakeholderInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutStakeholderInput, PackageUncheckedUpdateWithoutStakeholderInput>
  }

  export type PackageUpdateWithoutStakeholderInput = {
    packageType?: PackageTypeUpdateOneWithoutPackagesNestedInput
    delivery?: DeliveryUpdateOneRequiredWithoutPackagesNestedInput
  }

  export type PackageUncheckedUpdateWithoutStakeholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    deliveryId?: IntFieldUpdateOperationsInput | number
  }

  export type StakeholderCreateWithoutTractRecordsInput = {
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    packageId?: number | null
    projects: ProjectCreateNestedOneWithoutStakeholdersInput
    package?: PackageCreateNestedOneWithoutStakeholderInput
  }

  export type StakeholderUncheckedCreateWithoutTractRecordsInput = {
    id?: number
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    projectId: number
    packageId?: number | null
    package?: PackageUncheckedCreateNestedOneWithoutStakeholderInput
  }

  export type StakeholderCreateOrConnectWithoutTractRecordsInput = {
    where: StakeholderWhereUniqueInput
    create: XOR<StakeholderCreateWithoutTractRecordsInput, StakeholderUncheckedCreateWithoutTractRecordsInput>
  }

  export type StakeholderUpsertWithoutTractRecordsInput = {
    update: XOR<StakeholderUpdateWithoutTractRecordsInput, StakeholderUncheckedUpdateWithoutTractRecordsInput>
    create: XOR<StakeholderCreateWithoutTractRecordsInput, StakeholderUncheckedCreateWithoutTractRecordsInput>
    where?: StakeholderWhereInput
  }

  export type StakeholderUpdateToOneWithWhereWithoutTractRecordsInput = {
    where?: StakeholderWhereInput
    data: XOR<StakeholderUpdateWithoutTractRecordsInput, StakeholderUncheckedUpdateWithoutTractRecordsInput>
  }

  export type StakeholderUpdateWithoutTractRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    projects?: ProjectUpdateOneRequiredWithoutStakeholdersNestedInput
    package?: PackageUpdateOneWithoutStakeholderNestedInput
  }

  export type StakeholderUncheckedUpdateWithoutTractRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    package?: PackageUncheckedUpdateOneWithoutStakeholderNestedInput
  }

  export type ProjectCreateWithoutDeliveriesInput = {
    name: string
    year: number
    notes: string
    surveyLink: string
    stakeholders?: StakeholderCreateNestedManyWithoutProjectsInput
    items?: ItemCreateNestedManyWithoutProjectInput
    PackageType?: PackageTypeCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    name: string
    year: number
    notes: string
    surveyLink: string
    stakeholders?: StakeholderUncheckedCreateNestedManyWithoutProjectsInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    PackageType?: PackageTypeUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDeliveriesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDeliveriesInput, ProjectUncheckedCreateWithoutDeliveriesInput>
  }

  export type PackageCreateWithoutDeliveryInput = {
    packageType?: PackageTypeCreateNestedOneWithoutPackagesInput
    stakeholder: StakeholderCreateNestedOneWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutDeliveryInput = {
    id?: number
    packageTypeId?: number | null
    stakeholderId: number
  }

  export type PackageCreateOrConnectWithoutDeliveryInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutDeliveryInput, PackageUncheckedCreateWithoutDeliveryInput>
  }

  export type PackageCreateManyDeliveryInputEnvelope = {
    data: PackageCreateManyDeliveryInput | PackageCreateManyDeliveryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutDeliveriesInput = {
    update: XOR<ProjectUpdateWithoutDeliveriesInput, ProjectUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<ProjectCreateWithoutDeliveriesInput, ProjectUncheckedCreateWithoutDeliveriesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDeliveriesInput, ProjectUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ProjectUpdateWithoutDeliveriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    stakeholders?: StakeholderUpdateManyWithoutProjectsNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    PackageType?: PackageTypeUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    stakeholders?: StakeholderUncheckedUpdateManyWithoutProjectsNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    PackageType?: PackageTypeUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PackageUpsertWithWhereUniqueWithoutDeliveryInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutDeliveryInput, PackageUncheckedUpdateWithoutDeliveryInput>
    create: XOR<PackageCreateWithoutDeliveryInput, PackageUncheckedCreateWithoutDeliveryInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutDeliveryInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutDeliveryInput, PackageUncheckedUpdateWithoutDeliveryInput>
  }

  export type PackageUpdateManyWithWhereWithoutDeliveryInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutDeliveryInput>
  }

  export type PackageScalarWhereInput = {
    AND?: PackageScalarWhereInput | PackageScalarWhereInput[]
    OR?: PackageScalarWhereInput[]
    NOT?: PackageScalarWhereInput | PackageScalarWhereInput[]
    id?: IntFilter<"Package"> | number
    packageTypeId?: IntNullableFilter<"Package"> | number | null
    deliveryId?: IntFilter<"Package"> | number
    stakeholderId?: IntFilter<"Package"> | number
  }

  export type PackageTypeCreateWithoutPackagesInput = {
    name: string
    notes: string
    project: ProjectCreateNestedOneWithoutPackageTypeInput
    items?: PackageItemCreateNestedManyWithoutPackageTypeInput
  }

  export type PackageTypeUncheckedCreateWithoutPackagesInput = {
    id?: number
    name: string
    notes: string
    projectId: number
    items?: PackageItemUncheckedCreateNestedManyWithoutPackageTypeInput
  }

  export type PackageTypeCreateOrConnectWithoutPackagesInput = {
    where: PackageTypeWhereUniqueInput
    create: XOR<PackageTypeCreateWithoutPackagesInput, PackageTypeUncheckedCreateWithoutPackagesInput>
  }

  export type DeliveryCreateWithoutPackagesInput = {
    date?: string | null
    delivery_method: string
    carrier?: string | null
    route: string
    destination: string
    completed: boolean
    notes: string
    project: ProjectCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveryUncheckedCreateWithoutPackagesInput = {
    id?: number
    date?: string | null
    delivery_method: string
    carrier?: string | null
    route: string
    destination: string
    completed: boolean
    notes: string
    projectId: number
  }

  export type DeliveryCreateOrConnectWithoutPackagesInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutPackagesInput, DeliveryUncheckedCreateWithoutPackagesInput>
  }

  export type StakeholderCreateWithoutPackageInput = {
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    packageId?: number | null
    projects: ProjectCreateNestedOneWithoutStakeholdersInput
    tractRecords?: TractRecordCreateNestedManyWithoutStakeholderInput
  }

  export type StakeholderUncheckedCreateWithoutPackageInput = {
    id?: number
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    projectId: number
    packageId?: number | null
    tractRecords?: TractRecordUncheckedCreateNestedManyWithoutStakeholderInput
  }

  export type StakeholderCreateOrConnectWithoutPackageInput = {
    where: StakeholderWhereUniqueInput
    create: XOR<StakeholderCreateWithoutPackageInput, StakeholderUncheckedCreateWithoutPackageInput>
  }

  export type PackageTypeUpsertWithoutPackagesInput = {
    update: XOR<PackageTypeUpdateWithoutPackagesInput, PackageTypeUncheckedUpdateWithoutPackagesInput>
    create: XOR<PackageTypeCreateWithoutPackagesInput, PackageTypeUncheckedCreateWithoutPackagesInput>
    where?: PackageTypeWhereInput
  }

  export type PackageTypeUpdateToOneWithWhereWithoutPackagesInput = {
    where?: PackageTypeWhereInput
    data: XOR<PackageTypeUpdateWithoutPackagesInput, PackageTypeUncheckedUpdateWithoutPackagesInput>
  }

  export type PackageTypeUpdateWithoutPackagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutPackageTypeNestedInput
    items?: PackageItemUpdateManyWithoutPackageTypeNestedInput
  }

  export type PackageTypeUncheckedUpdateWithoutPackagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    items?: PackageItemUncheckedUpdateManyWithoutPackageTypeNestedInput
  }

  export type DeliveryUpsertWithoutPackagesInput = {
    update: XOR<DeliveryUpdateWithoutPackagesInput, DeliveryUncheckedUpdateWithoutPackagesInput>
    create: XOR<DeliveryCreateWithoutPackagesInput, DeliveryUncheckedCreateWithoutPackagesInput>
    where?: DeliveryWhereInput
  }

  export type DeliveryUpdateToOneWithWhereWithoutPackagesInput = {
    where?: DeliveryWhereInput
    data: XOR<DeliveryUpdateWithoutPackagesInput, DeliveryUncheckedUpdateWithoutPackagesInput>
  }

  export type DeliveryUpdateWithoutPackagesInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_method?: StringFieldUpdateOperationsInput | string
    carrier?: NullableStringFieldUpdateOperationsInput | string | null
    route?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutPackagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_method?: StringFieldUpdateOperationsInput | string
    carrier?: NullableStringFieldUpdateOperationsInput | string | null
    route?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type StakeholderUpsertWithoutPackageInput = {
    update: XOR<StakeholderUpdateWithoutPackageInput, StakeholderUncheckedUpdateWithoutPackageInput>
    create: XOR<StakeholderCreateWithoutPackageInput, StakeholderUncheckedCreateWithoutPackageInput>
    where?: StakeholderWhereInput
  }

  export type StakeholderUpdateToOneWithWhereWithoutPackageInput = {
    where?: StakeholderWhereInput
    data: XOR<StakeholderUpdateWithoutPackageInput, StakeholderUncheckedUpdateWithoutPackageInput>
  }

  export type StakeholderUpdateWithoutPackageInput = {
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    projects?: ProjectUpdateOneRequiredWithoutStakeholdersNestedInput
    tractRecords?: TractRecordUpdateManyWithoutStakeholderNestedInput
  }

  export type StakeholderUncheckedUpdateWithoutPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    tractRecords?: TractRecordUncheckedUpdateManyWithoutStakeholderNestedInput
  }

  export type ProjectCreateWithoutPackageTypeInput = {
    name: string
    year: number
    notes: string
    surveyLink: string
    stakeholders?: StakeholderCreateNestedManyWithoutProjectsInput
    deliveries?: DeliveryCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPackageTypeInput = {
    id?: number
    name: string
    year: number
    notes: string
    surveyLink: string
    stakeholders?: StakeholderUncheckedCreateNestedManyWithoutProjectsInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPackageTypeInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPackageTypeInput, ProjectUncheckedCreateWithoutPackageTypeInput>
  }

  export type PackageCreateWithoutPackageTypeInput = {
    delivery: DeliveryCreateNestedOneWithoutPackagesInput
    stakeholder: StakeholderCreateNestedOneWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutPackageTypeInput = {
    id?: number
    deliveryId: number
    stakeholderId: number
  }

  export type PackageCreateOrConnectWithoutPackageTypeInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutPackageTypeInput, PackageUncheckedCreateWithoutPackageTypeInput>
  }

  export type PackageCreateManyPackageTypeInputEnvelope = {
    data: PackageCreateManyPackageTypeInput | PackageCreateManyPackageTypeInput[]
    skipDuplicates?: boolean
  }

  export type PackageItemCreateWithoutPackageTypeInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutPackageItemsInput
  }

  export type PackageItemUncheckedCreateWithoutPackageTypeInput = {
    id?: number
    quantity: number
    itemId: number
  }

  export type PackageItemCreateOrConnectWithoutPackageTypeInput = {
    where: PackageItemWhereUniqueInput
    create: XOR<PackageItemCreateWithoutPackageTypeInput, PackageItemUncheckedCreateWithoutPackageTypeInput>
  }

  export type PackageItemCreateManyPackageTypeInputEnvelope = {
    data: PackageItemCreateManyPackageTypeInput | PackageItemCreateManyPackageTypeInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutPackageTypeInput = {
    update: XOR<ProjectUpdateWithoutPackageTypeInput, ProjectUncheckedUpdateWithoutPackageTypeInput>
    create: XOR<ProjectCreateWithoutPackageTypeInput, ProjectUncheckedCreateWithoutPackageTypeInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPackageTypeInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPackageTypeInput, ProjectUncheckedUpdateWithoutPackageTypeInput>
  }

  export type ProjectUpdateWithoutPackageTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    stakeholders?: StakeholderUpdateManyWithoutProjectsNestedInput
    deliveries?: DeliveryUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPackageTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    stakeholders?: StakeholderUncheckedUpdateManyWithoutProjectsNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PackageUpsertWithWhereUniqueWithoutPackageTypeInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutPackageTypeInput, PackageUncheckedUpdateWithoutPackageTypeInput>
    create: XOR<PackageCreateWithoutPackageTypeInput, PackageUncheckedCreateWithoutPackageTypeInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutPackageTypeInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutPackageTypeInput, PackageUncheckedUpdateWithoutPackageTypeInput>
  }

  export type PackageUpdateManyWithWhereWithoutPackageTypeInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutPackageTypeInput>
  }

  export type PackageItemUpsertWithWhereUniqueWithoutPackageTypeInput = {
    where: PackageItemWhereUniqueInput
    update: XOR<PackageItemUpdateWithoutPackageTypeInput, PackageItemUncheckedUpdateWithoutPackageTypeInput>
    create: XOR<PackageItemCreateWithoutPackageTypeInput, PackageItemUncheckedCreateWithoutPackageTypeInput>
  }

  export type PackageItemUpdateWithWhereUniqueWithoutPackageTypeInput = {
    where: PackageItemWhereUniqueInput
    data: XOR<PackageItemUpdateWithoutPackageTypeInput, PackageItemUncheckedUpdateWithoutPackageTypeInput>
  }

  export type PackageItemUpdateManyWithWhereWithoutPackageTypeInput = {
    where: PackageItemScalarWhereInput
    data: XOR<PackageItemUpdateManyMutationInput, PackageItemUncheckedUpdateManyWithoutPackageTypeInput>
  }

  export type PackageItemScalarWhereInput = {
    AND?: PackageItemScalarWhereInput | PackageItemScalarWhereInput[]
    OR?: PackageItemScalarWhereInput[]
    NOT?: PackageItemScalarWhereInput | PackageItemScalarWhereInput[]
    id?: IntFilter<"PackageItem"> | number
    packageTypeId?: IntFilter<"PackageItem"> | number
    quantity?: IntFilter<"PackageItem"> | number
    itemId?: IntFilter<"PackageItem"> | number
  }

  export type PackageTypeCreateWithoutItemsInput = {
    name: string
    notes: string
    project: ProjectCreateNestedOneWithoutPackageTypeInput
    packages?: PackageCreateNestedManyWithoutPackageTypeInput
  }

  export type PackageTypeUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
    notes: string
    projectId: number
    packages?: PackageUncheckedCreateNestedManyWithoutPackageTypeInput
  }

  export type PackageTypeCreateOrConnectWithoutItemsInput = {
    where: PackageTypeWhereUniqueInput
    create: XOR<PackageTypeCreateWithoutItemsInput, PackageTypeUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutPackageItemsInput = {
    name: string
    description: string
    image: string
    quantity: number
    project: ProjectCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutPackageItemsInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    projectId: number
  }

  export type ItemCreateOrConnectWithoutPackageItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPackageItemsInput, ItemUncheckedCreateWithoutPackageItemsInput>
  }

  export type PackageTypeUpsertWithoutItemsInput = {
    update: XOR<PackageTypeUpdateWithoutItemsInput, PackageTypeUncheckedUpdateWithoutItemsInput>
    create: XOR<PackageTypeCreateWithoutItemsInput, PackageTypeUncheckedCreateWithoutItemsInput>
    where?: PackageTypeWhereInput
  }

  export type PackageTypeUpdateToOneWithWhereWithoutItemsInput = {
    where?: PackageTypeWhereInput
    data: XOR<PackageTypeUpdateWithoutItemsInput, PackageTypeUncheckedUpdateWithoutItemsInput>
  }

  export type PackageTypeUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutPackageTypeNestedInput
    packages?: PackageUpdateManyWithoutPackageTypeNestedInput
  }

  export type PackageTypeUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    packages?: PackageUncheckedUpdateManyWithoutPackageTypeNestedInput
  }

  export type ItemUpsertWithoutPackageItemsInput = {
    update: XOR<ItemUpdateWithoutPackageItemsInput, ItemUncheckedUpdateWithoutPackageItemsInput>
    create: XOR<ItemCreateWithoutPackageItemsInput, ItemUncheckedCreateWithoutPackageItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutPackageItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutPackageItemsInput, ItemUncheckedUpdateWithoutPackageItemsInput>
  }

  export type ItemUpdateWithoutPackageItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutPackageItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateWithoutItemsInput = {
    name: string
    year: number
    notes: string
    surveyLink: string
    stakeholders?: StakeholderCreateNestedManyWithoutProjectsInput
    deliveries?: DeliveryCreateNestedManyWithoutProjectInput
    PackageType?: PackageTypeCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
    year: number
    notes: string
    surveyLink: string
    stakeholders?: StakeholderUncheckedCreateNestedManyWithoutProjectsInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutProjectInput
    PackageType?: PackageTypeUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutItemsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
  }

  export type PackageItemCreateWithoutItemInput = {
    quantity: number
    packageType: PackageTypeCreateNestedOneWithoutItemsInput
  }

  export type PackageItemUncheckedCreateWithoutItemInput = {
    id?: number
    packageTypeId: number
    quantity: number
  }

  export type PackageItemCreateOrConnectWithoutItemInput = {
    where: PackageItemWhereUniqueInput
    create: XOR<PackageItemCreateWithoutItemInput, PackageItemUncheckedCreateWithoutItemInput>
  }

  export type PackageItemCreateManyItemInputEnvelope = {
    data: PackageItemCreateManyItemInput | PackageItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutItemsInput = {
    update: XOR<ProjectUpdateWithoutItemsInput, ProjectUncheckedUpdateWithoutItemsInput>
    create: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutItemsInput, ProjectUncheckedUpdateWithoutItemsInput>
  }

  export type ProjectUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    stakeholders?: StakeholderUpdateManyWithoutProjectsNestedInput
    deliveries?: DeliveryUpdateManyWithoutProjectNestedInput
    PackageType?: PackageTypeUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    surveyLink?: StringFieldUpdateOperationsInput | string
    stakeholders?: StakeholderUncheckedUpdateManyWithoutProjectsNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutProjectNestedInput
    PackageType?: PackageTypeUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PackageItemUpsertWithWhereUniqueWithoutItemInput = {
    where: PackageItemWhereUniqueInput
    update: XOR<PackageItemUpdateWithoutItemInput, PackageItemUncheckedUpdateWithoutItemInput>
    create: XOR<PackageItemCreateWithoutItemInput, PackageItemUncheckedCreateWithoutItemInput>
  }

  export type PackageItemUpdateWithWhereUniqueWithoutItemInput = {
    where: PackageItemWhereUniqueInput
    data: XOR<PackageItemUpdateWithoutItemInput, PackageItemUncheckedUpdateWithoutItemInput>
  }

  export type PackageItemUpdateManyWithWhereWithoutItemInput = {
    where: PackageItemScalarWhereInput
    data: XOR<PackageItemUpdateManyMutationInput, PackageItemUncheckedUpdateManyWithoutItemInput>
  }

  export type StakeholderCreateManyProjectsInput = {
    id?: number
    name: string
    streetAddress: string
    mailingAddress: string
    phoneNumber: string
    isPerson: string
    stakeholderComments: string
    stakeholderStatus: string
    contacted: string
    consultation: string
    attempts: string
    email: string
    followUp: string
    packageId?: number | null
  }

  export type DeliveryCreateManyProjectInput = {
    id?: number
    date?: string | null
    delivery_method: string
    carrier?: string | null
    route: string
    destination: string
    completed: boolean
    notes: string
  }

  export type ItemCreateManyProjectInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
  }

  export type PackageTypeCreateManyProjectInput = {
    id?: number
    name: string
    notes: string
  }

  export type StakeholderUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    tractRecords?: TractRecordUpdateManyWithoutStakeholderNestedInput
    package?: PackageUpdateOneWithoutStakeholderNestedInput
  }

  export type StakeholderUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    tractRecords?: TractRecordUncheckedUpdateManyWithoutStakeholderNestedInput
    package?: PackageUncheckedUpdateOneWithoutStakeholderNestedInput
  }

  export type StakeholderUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    mailingAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isPerson?: StringFieldUpdateOperationsInput | string
    stakeholderComments?: StringFieldUpdateOperationsInput | string
    stakeholderStatus?: StringFieldUpdateOperationsInput | string
    contacted?: StringFieldUpdateOperationsInput | string
    consultation?: StringFieldUpdateOperationsInput | string
    attempts?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    followUp?: StringFieldUpdateOperationsInput | string
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DeliveryUpdateWithoutProjectInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_method?: StringFieldUpdateOperationsInput | string
    carrier?: NullableStringFieldUpdateOperationsInput | string | null
    route?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    packages?: PackageUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_method?: StringFieldUpdateOperationsInput | string
    carrier?: NullableStringFieldUpdateOperationsInput | string | null
    route?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    packages?: PackageUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_method?: StringFieldUpdateOperationsInput | string
    carrier?: NullableStringFieldUpdateOperationsInput | string | null
    route?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    packageItems?: PackageItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    packageItems?: PackageItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PackageTypeUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    packages?: PackageUpdateManyWithoutPackageTypeNestedInput
    items?: PackageItemUpdateManyWithoutPackageTypeNestedInput
  }

  export type PackageTypeUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    packages?: PackageUncheckedUpdateManyWithoutPackageTypeNestedInput
    items?: PackageItemUncheckedUpdateManyWithoutPackageTypeNestedInput
  }

  export type PackageTypeUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type TractRecordCreateManyStakeholderInput = {
    id?: number
    tract: number
    position: number
    pin: string
    interest: string
    structure: string
    occupants: number
    worksLand: string
    tractComments: string
    pipelineStatus: string
    commodity: string
    pageNumber: string
    keepdelete: string
  }

  export type TractRecordUpdateWithoutStakeholderInput = {
    tract?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    pin?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    structure?: StringFieldUpdateOperationsInput | string
    occupants?: IntFieldUpdateOperationsInput | number
    worksLand?: StringFieldUpdateOperationsInput | string
    tractComments?: StringFieldUpdateOperationsInput | string
    pipelineStatus?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    pageNumber?: StringFieldUpdateOperationsInput | string
    keepdelete?: StringFieldUpdateOperationsInput | string
  }

  export type TractRecordUncheckedUpdateWithoutStakeholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    tract?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    pin?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    structure?: StringFieldUpdateOperationsInput | string
    occupants?: IntFieldUpdateOperationsInput | number
    worksLand?: StringFieldUpdateOperationsInput | string
    tractComments?: StringFieldUpdateOperationsInput | string
    pipelineStatus?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    pageNumber?: StringFieldUpdateOperationsInput | string
    keepdelete?: StringFieldUpdateOperationsInput | string
  }

  export type TractRecordUncheckedUpdateManyWithoutStakeholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    tract?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    pin?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    structure?: StringFieldUpdateOperationsInput | string
    occupants?: IntFieldUpdateOperationsInput | number
    worksLand?: StringFieldUpdateOperationsInput | string
    tractComments?: StringFieldUpdateOperationsInput | string
    pipelineStatus?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    pageNumber?: StringFieldUpdateOperationsInput | string
    keepdelete?: StringFieldUpdateOperationsInput | string
  }

  export type PackageCreateManyDeliveryInput = {
    id?: number
    packageTypeId?: number | null
    stakeholderId: number
  }

  export type PackageUpdateWithoutDeliveryInput = {
    packageType?: PackageTypeUpdateOneWithoutPackagesNestedInput
    stakeholder?: StakeholderUpdateOneRequiredWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutDeliveryInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    stakeholderId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageUncheckedUpdateManyWithoutDeliveryInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    stakeholderId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageCreateManyPackageTypeInput = {
    id?: number
    deliveryId: number
    stakeholderId: number
  }

  export type PackageItemCreateManyPackageTypeInput = {
    id?: number
    quantity: number
    itemId: number
  }

  export type PackageUpdateWithoutPackageTypeInput = {
    delivery?: DeliveryUpdateOneRequiredWithoutPackagesNestedInput
    stakeholder?: StakeholderUpdateOneRequiredWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutPackageTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveryId?: IntFieldUpdateOperationsInput | number
    stakeholderId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageUncheckedUpdateManyWithoutPackageTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveryId?: IntFieldUpdateOperationsInput | number
    stakeholderId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageItemUpdateWithoutPackageTypeInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutPackageItemsNestedInput
  }

  export type PackageItemUncheckedUpdateWithoutPackageTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageItemUncheckedUpdateManyWithoutPackageTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageItemCreateManyItemInput = {
    id?: number
    packageTypeId: number
    quantity: number
  }

  export type PackageItemUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    packageType?: PackageTypeUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PackageItemUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PackageItemUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StakeholderCountOutputTypeDefaultArgs instead
     */
    export type StakeholderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StakeholderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeliveryCountOutputTypeDefaultArgs instead
     */
    export type DeliveryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeliveryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PackageTypeCountOutputTypeDefaultArgs instead
     */
    export type PackageTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PackageTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCountOutputTypeDefaultArgs instead
     */
    export type ItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StakeholderDefaultArgs instead
     */
    export type StakeholderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StakeholderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TractRecordDefaultArgs instead
     */
    export type TractRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TractRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeliveryDefaultArgs instead
     */
    export type DeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeliveryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PackageDefaultArgs instead
     */
    export type PackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PackageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PackageTypeDefaultArgs instead
     */
    export type PackageTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PackageTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PackageItemDefaultArgs instead
     */
    export type PackageItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PackageItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}