import Pouchdb from "pouchdb";

const db = new Pouchdb("todomypouch");

db.info().then((info) => {
  console.log(info);
});

export async function insertToDB(data) {
  try {
    const response = await db.post(data);
    return response;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export function getToDB() {
  const val = db
    .allDocs({ include_docs: true, decending: true }, (err, doc) => doc.rows)
    .catch((err) => {
      console.error(err);
    });
  return val;
}

export async function removeToDB(id) {
  try {
    const doc = await db.get(id);
    db.remove(doc);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteAll() {
  try {
    await db.destroy();
  } catch (err) {
    console.log(err);
  }
}

// db.bulkDocs(docs, function (err, response) {
//   if (err) {
//     return console.log(err);
//   } else {
//     console.log(response + "Documents deleted Successfully");
//   }
// });

export async function deleteTesAll() {
  db.allDocs({ include_docs: true })
    .then((allDocs) => {
      return allDocs.rows.map((row) => {
        return { _id: row.id, _rev: row.doc._rev, _deleted: true };
      });
    })
    .then((deleteDocs) => {
      return db.bulkDocs(deleteDocs);
    });
}

export async function updateDB(id, data) {
  try {
    const doc = await db.get(id);
    const response = await db.put({
      _id: id,
      // eslint-disable-next-line no-underscore-dangle
      _rev: doc._rev,
      ...data,
    });
    console.log("response", response);
  } catch (error) {
    console.log("error is== ", error);
  }
}
