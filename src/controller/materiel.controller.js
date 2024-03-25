const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const getAllMateriel = async (req, res) => {
  try {
    const sql = "SELECT * FROM materiel";

    await connection.query(sql, (error, results, fields) => {
      if (error) return res.json({ error: error });
      res.json({ materiels: results });
    });
  } catch (error) {
    res.json({ error: error });
  }
};

const addMateriel = async (req, res) => {
  try {
    if (
      req.body.num_materiel &&
      req.body.design &&
      req.body.etat &&
      req.body.quantite
    ) {
      const sql = `INSERT INTO materiel (num_materiel, design, etat, quantite) 
       VALUES ("${req.body.num_materiel}", "${req.body.design}", "${req.body.etat}", ${req.body.quantite})`;

      await connection.query(sql, (error, results, fields) => {
        if (error) {
          return res.json({ error: error });
        }
        res.json(results);
      });
    }
  } catch (error) {
    res.json({ error: error });
  }
};

const updateMateriel = async (req, res) => {
  try {
    let setValue = Array();
    if (req.body.num_materiel) {
      setValue.push(`num_materiel = "${req.body.num_materiel}"`);
    }
    if (req.body.design) {
      setValue.push(`design = "${req.body.design}"`);
    }
    if (req.body.etat) {
      setValue.push(`etat = "${req.body.etat}"`);
    }
    if (req.body.quantite) {
      setValue.push(`quantite = "${req.body.quantite}"`);
    }

    const stringSetValue = setValue.join(", ");

    let sql = `UPDATE materiel SET ${stringSetValue} WHERE num_materiel = "${req.params.id}"`;

    await connection.query(sql, (error, results, fields) => {
      if (error) return res.json({ error: error });
      res.json(results);
    });
  } catch (error) {
    res.json({ error: error });
  }
};

const deleteMateriel = async (req, res) => {
  try {
    const sql = `DELETE FROM materiel WHERE num_materiel = "${req.params.id}"`;

    await connection.query(sql, (error, results, fields) => {
      if (error) {
        return res.json({ error: error });
      }
      res.json(results);
    });
  } catch (error) {
    res.json({ error: error });
  }
};

module.exports = {
  getAllMateriel,
  addMateriel,
  updateMateriel,
  deleteMateriel,
};
