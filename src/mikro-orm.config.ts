import path from "path";
import { MikroORM } from "@mikro-orm/core";

import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

const microConfig = {
    dbName: "zanas",
    entities: [Post, User],
    type: "postgresql",
    debug: !__prod__,
    user: "user",
    password: "password",
    clientUrl: "postgresql://localhost:5432",
    migrations: {
        path: path.join(__dirname,'./migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
      },} as Parameters<typeof MikroORM.init>[0];

export default microConfig;