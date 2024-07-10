import type { NextFunction, Request, Response } from "express";
import { TOKEN } from "./constants";
import fs from 'fs';

const niceTryHtml = fs.readFileSync('niceTry.html');

export function checkAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.cookies['Authorization'];
  console.log(`Authorization header: ${authHeader}`);
  if (typeof authHeader !== 'string') {
    res.writeHead(401, {'Content-Type': 'text/html'}).end(niceTryHtml);
    return;
  }

  const token = authHeader.split(' ')[1];
  if (token !== TOKEN) {
    res.writeHead(401, {'Content-Type': 'text/html'}).end(niceTryHtml);
    return;
  }

  next();
}