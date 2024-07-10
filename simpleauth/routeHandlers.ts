import type { Request, Response } from "express";
import fs from 'fs';
import { PASSWORD, TOKEN, USERNAME } from "./constants";

const indexHtml = fs.readFileSync('index.html');
const loginFailedHtml = fs.readFileSync('loginFailed.html');
const secretHtml = fs.readFileSync('secret.html');

export function indexHandler(req: Request, res: Response): void {
  res.writeHead(200, {'Content-Type': 'text/html'}).end(indexHtml);
}

export function secretHandler(req: Request, res: Response): void {
  res.writeHead(200, {'Content-Type': 'text/html'}).end(secretHtml);
}

interface Credentials {
  user: string;
  password: string;
}
export function loginHandler(req: Request<undefined, undefined, Credentials>, res: Response): void {
  const credentials = req.body;
  console.log('Received:');
  console.dir(credentials, {depth: null});
  if (credentials.user === USERNAME && credentials.password === PASSWORD) {
    res.cookie('Authorization', `Bearer ${TOKEN}`).redirect('/secret');
  } else {
    res.writeHead(401, {'Content-Type': 'text/html'}).end(loginFailedHtml);
  }
}