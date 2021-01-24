import path from "path";
import { MikroORM } from "@mikro-orm/core";
import dotenv from "dotenv";

import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

dotenv.config();

const microConfig = {
    dbName: process.env.POSTGRES_DB,
    entities: [Post, User],
    type: "postgresql",
    debug: !__prod__,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    clientUrl: "postgresql://localhost:5432",
    migrations: {
        path: path.join(__dirname,'./migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
      },} as Parameters<typeof MikroORM.init>[0];

export default microConfig;