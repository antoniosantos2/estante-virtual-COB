import { Request, Response } from "express"
import { compete } from "../datas"

export default function (
    req: Request,
    res: Response
):void{
    res.send(compete)
}