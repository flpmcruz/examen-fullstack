import { data } from "./data.js";

export class AppController {
  static findUser(id) {
    return data.filter((user) => user.id === +id);
  }

  static getUsers(req, res) {
    res.status(200).json(data);
  }

  static getUser(req, res) {
    const { id } = req.params;
    const index = data.findIndex((item) => item.id === +id);
    if (index === -1)
      return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ user: data[index] });
  }

  static createUser(req, res) {
    const { content } = req.body;
    if (!content || content === "")
      return res.status(400).json({ message: "Incorrect data" });

    data.push({ id: data.length + 1, content });
    return res.status(201).json({ id: data.length + 1, content });
  }

  static updateUser(req, res) {
    const { id } = req.params;
    const index = data.findIndex((item) => item.id === +id);
    if (index === -1)
      return res.status(400).json({ message: "User not found" });

    const { content } = req.body;
    if (!content || content === "")
      res.status(400).json({ message: "Incorrect data" });

    data[index].content = content;
    res.status(200).json({ user: data[index] });
  }

  static deleteUser(req, res) {
    const { id } = req.params;
    const index = data.findIndex((item) => item.id === +id);
    if (index === -1)
      return res.status(400).json({ message: "User not found" });

    const item = data[index];
    data.splice(index, 1);
    return res.status(200).json({ item });
  }
}
