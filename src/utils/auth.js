export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject("Email and password are required");
      return;
    }

    resolve({ token: "fake-token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("Invalid token");
      return;
    }

    resolve({
      data: {
        name: "fake user",
        email: "fake@example.com",
        _id: "fake-user-id",
      },
    });
  });
};
