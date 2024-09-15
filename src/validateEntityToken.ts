import type { TypeMap } from '@karmaniverous/entity-tools';

import type { EntityMap } from './Config';
import { EntityManager } from './EntityManager';

/**
 * Validate that an entity is defined in the EntityManager config.
 *
 * @param entityManager - {@link EntityManager | `EntityManager`} instance.
 * @param entityToken - `entityManager.config.entities` key.
 *
 * @throws `Error` if `entityToken` is invalid.
 */
export function validateEntityToken<
  M extends EntityMap,
  HashKey extends string,
  RangeKey extends string,
  IndexableTypes extends TypeMap,
>(
  entityManager: EntityManager<M, HashKey, RangeKey, IndexableTypes>,
  entityToken: string,
): void {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!entityManager.config.entities[entityToken])
    throw new Error('invalid entity token');
}
