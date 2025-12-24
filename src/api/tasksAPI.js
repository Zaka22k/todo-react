const URL = "http://localhost:3001/tasks";

const headers = {
  "Content-Type": "application/json",
};

const tasksAPI = {
  getAll: () => {
    return fetch(URL).then((res) => res.json());
  },

  getById: (id) => {
    return fetch(`${URL}/${id}`).then((res) => res.json());
  },

  add: (task) => {
    return fetch(URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(task),
    }).then((res) => res.json());
  },

  delete: (id) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
  },

  deleteAll: (tasks) => {
    return Promise.all(
      tasks.map(({ id }) => {
        return tasksAPI.delete(id);
      })
    );
  },

  tooggleComplete: (id, isDone) => {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone }),
    });
  },
};

export default tasksAPI;
