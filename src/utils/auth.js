export const register = ({ email, password, name }) => {
  return new Promise((resolve, reject) => {
    if (!email || !password || !name) {
      reject("All fields are required");
      return;
    }

    resolve({
      data: {
        email,
        name,
        _id: "mock-user-id",
      },
    });
  });
};

export const authorize = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject("Email and password are required");
      return;
    }

    resolve({
      token: "mock-token",
    });
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
        name: "Wahid",
        email: "wahid@example.com",
        _id: "mock-user-id",
      },
    });
  });
};
