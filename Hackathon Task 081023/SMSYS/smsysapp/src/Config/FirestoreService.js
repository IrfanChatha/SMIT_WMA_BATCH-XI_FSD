import { db } from '../firestore'
function getStudentSystem() {
   return new Promise((resolve, reject) => {
      db.collection("studentsystem").get().then((studentsystem) => {
           resolve(studentsystem);
      }).catch((e) => {
           reject(e);
      })
   })
}
export default  { getStudentSystem }