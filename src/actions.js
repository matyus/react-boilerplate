const CREATE_FOO = "CREATE_FOO"

export const actionTypes = {
  CREATE_FOO
}

export function createFoo(foo) {
  return {
    type: CREATE_FOO,
    foo
  }
}

