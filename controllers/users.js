const users = require("../data/index");

const list = //get all users
  (req, res) => {
    res.json(users);
  };

const show = //get comment with ID
  (req, res) => {
    // console.log(req.params._id)
    let foundItem = req.params.id;

    try {
      foundItem = users.find(
        (item, index, arr) => item.id === Number(req.params.id)
      );
      res.json(foundItem);
    } catch (e) {
      res.status(500).send("Could Not Find ID");
    }
  };

const create = //////////// add new comment
  (req, res) => {
    const length = users.length;

    try {
      const newComment = {
        id: length + 1,
        ...req.body,
      };

      users.push(newComment);

      res.json(users);
    } catch (e) {
      res.status(500).send("Could Not Find ID");
    }
  };

const update = (req, res) => {
  // console.log(job)

  const parm = Number(req.params.id);

  for (let i = 0; i < users.length; i++) {
    let element = users[i];
    // console.log(parm, element.id);

    if (parm == element.id) {
      //   console.log(req.body);
      if (req.body) {
        // console.log(element, req.body);
        users[i] = { ...req.body };
      }
    }
  }

  res.json(users);
};

const remove = (req, res) => {
  // console.log(req,params)
  try {
    const removeUser = users.find(
      (item, index, arr) => item.id === Number(req.params.id)
    );
    removeUser.isactive = false;
    //   delete removeUser;

    res.send(removeUser);
  } catch (e) {
    res.status(500).send("Could Not Find ID");
  }
};

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
