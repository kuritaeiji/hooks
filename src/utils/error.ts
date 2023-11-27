type RouteError = {
  message?: string
}

const createError = (message?: string) => {
  throw { message }
}

export { createError }
export type { RouteError }
