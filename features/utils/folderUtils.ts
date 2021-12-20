import fs from "fs"

export const deleteDirectory = (path: string) => {
    fs.rmdirSync(path, { recursive: true })

}