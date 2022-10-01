import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginRoute = {
  path: "/login",
  method: "post",

  handler: async (req, res) => {
    const { email, password } = req.body;
    const db = getDbConnection("react-campus-connect");
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      res.sendStatus(401);
    }

    const { _id: id, isVerified, passwordHash, info } = user;
    const isCorrect = await bcrypt.compare(password, passwordHash);

    if (isCorrect) {
      jwt.sign(
        {
          id,
          email,
          info,
          isVerified,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2d",
        },
        (err, token) => {
          if (err) {
            return res.status(500).json(err);
          }

          res.status(200).json({ token });
        }
      );
    } else {
      res.sendStatus(401);
    }
  },
};
