import type { StateEntities } from './StateEntities';
import type { StateEntity } from './StateEntity';

export type State<Model> = StateEntities<Model> | StateEntity<Model>;
