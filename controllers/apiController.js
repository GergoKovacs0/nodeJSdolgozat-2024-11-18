const users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Sam Johnson" },
];

export const allUsers = (req, res) => {
  res.status(200).json(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  if (!user) {
    res.status(404).json({ message: `User with id ${id} not found` });
  }

  res.status(200).json(user);
};

export const createUser = (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ message: "Please provide id and name" });
  }

  const newUser = { id, name };
  users.push(newUser);

  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = users.find((user) => user.id === id);

  if (!user) {
    res.status(404).json({ message: `User with id ${id} not found` });
  }

  user.name = name;

  res.status(200).json(user);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    res.status(404).json({ message: `User with id ${id} not found` });
  }

  users.splice(index, 1);

  res.status(204).json({ message: `User with id ${id} deleted` });
};
