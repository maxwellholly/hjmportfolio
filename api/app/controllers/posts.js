/*const { Posts } = require('../models');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll();
    res.status(200).json(posts);
  } catch (e) {
    res.status(400).json({ e });
  }
};

exports.createPost = async (req, res) => {
  const {
    title,
    content,
    img,
  } = req.body;
  try {
    const newPost = await Posts.create({
      title: title,
      content: content,
      img: img,
    });
    res.status(201).json(newPost);
  } catch (e) {
    res.status(400).json({ e });
  }
};*/

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await Posts.update(req.body, {
      where: { id: id },
      returning: true,
    });
    res.status(200).json(updatedPost[1][0]);
  } catch (e) {
    res.status(400).json({ e });
  }
};

exports.removePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Posts.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    res.status(400).json({ e });
  }
};
