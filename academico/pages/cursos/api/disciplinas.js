import { db } from "@/services/firebase"
import { ref,set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {

  const uuid = v4()
  set(ref(db, 'disciplinas/' + uuid), req.body)
  res.status(200).json({ name: 'John Doe' })
  }