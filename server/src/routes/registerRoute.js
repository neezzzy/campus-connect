import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerRoute = {
  path: "/register",
  method: "post",

  handler: async (req, res) => {
    const { email, password } = req.body;
    const db = getDbConnection("react-campus-connect");
    const user = await db.collection("users").findOne({ email });
    if (user) {
      res.sendStatus(409);
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const startingInfo = {
      job: "student",
    };

    const result = await db.collection("users").insertOne({
      email,
      passwordHash,
      info: startingInfo,
      isVerified: false,
    });

    const { insertedId } = result;
    jwt.sign(
      {
        id: insertedId,
        email,
        info: startingInfo,
        isVerified: false,
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
  },
};
