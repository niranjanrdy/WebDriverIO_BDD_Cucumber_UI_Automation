 import fs from "fs"
// class Folderutils {

//     deleteFolder(path: string) {
//         fs.rmdirSync(path, { recursive: true })
//     }

// }
// export default new Folderutils()

export const deleteDirectory = (path: string)=>{
    fs.rmdirSync(path, { recursive: true })
    
}