import express from "express";
import u from "@/utils";
import jwt from "jsonwebtoken";
import { success } from "@/lib/responseFormat";

const router = express.Router();

function setToken(payload: string | object, expiresIn: string | number, secret: string): string {
  return (jwt.sign as any)(payload, secret, { expiresIn });
}

router.post("/", async (req, res) => {
  const username = (req.body?.username as string) || "admin";

  let user = await u.db("o_user").where("name", username).first();
  if (!user) {
    await u.db("o_user").insert({ id: 1, name: "admin", password: "" });
    user = await u.db("o_user").where("name", "admin").first();
  }

  const tokenData = await u.db("o_setting").where("key", "tokenKey").first();
  if (!tokenData) {
    await u.db("o_setting").insert({ key: "tokenKey", value: "quanzhenpai-local-key" });
    const td = await u.db("o_setting").where("key", "tokenKey").first();
    const token = setToken({ id: 1, name: username }, "365Days", td.value);
    return res.status(200).send(success({ token: "Bearer " + token, name: username, id: 1 }, "全帧派本地登录"));
  }

  const token = setToken({ id: user.id, name: user.name }, "365Days", tokenData.value);
  return res.status(200).send(success({ token: "Bearer " + token, name: user.name, id: user.id }, "全帧派本地登录"));
});

export default router;
