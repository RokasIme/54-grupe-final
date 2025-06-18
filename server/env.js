import dotenv from "dotenv";

let envFile = ".env";

for (const str of process.argv.slice(2)) {
  if (str.startsWith("--env=")) {
    envFile = str.split("=")[1];
  }
}

dotenv.config({
  path: envFile,
});

const allowedNodeEnvs = ["dev", "prod", "test"];

export const PORT = process.env.PORT ?? 3000;
export const NODE_ENV = allowedNodeEnvs.includes(process.env.NODE_ENV) ? process.env.NODE_ENV : allowedNodeEnvs[0];
