import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

const microConfig = {
    dbName: "zanas",
    entities: [Post],
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