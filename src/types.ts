import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import {Request, Response } from "express";
import { Session } from "express-session"

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REDIS_SECRET: string;
        POSTGRES_USER: string;
        POSTGRES_PASSWORD: string;
        POSTGRES_DB: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
      }
    }
  }

export type MyContext = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
    req: Request & { session: Session & { userId?: number} };
    res: Response;
}