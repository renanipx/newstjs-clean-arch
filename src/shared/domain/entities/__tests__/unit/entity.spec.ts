import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {

}

describe('Entity unit tests', () => {
  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = '9ee1423c-a17b-4bb8-ba3d-88ba72a0276d'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  });

  it('Should convert a entity to a JavaScript Object', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = '9ee1423c-a17b-4bb8-ba3d-88ba72a0276d'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({ id, ...props })
  });


})
