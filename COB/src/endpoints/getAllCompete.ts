import { Request, Response } from "express"
import connection from "../connection"
import { cadastro } from "../types"


export default async function getAllCompete(
    req: Request,
    res: Response
): Promise<void> {
   
    try {
        const cadastro = req.query

        const compete:cadastro[] = await connection("cadastro")
   
         res.send(compete)
    } catch (error) {
        res.status(500).send("Unexpected server error!")
    }
}