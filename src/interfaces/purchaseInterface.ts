import { purchases } from "@prisma/client";



export type PurchaseBody = Omit<purchases, 'id'>