// lib/fetchUser.ts
export const fetchUser = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          name: 'John Doe',
          email: 'john@example.com',
        })
      }, 1000)
    )
  }
  