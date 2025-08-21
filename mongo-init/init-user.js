db = db.getSiblingDB("mern-todo");  // базата каде корисникот ќе постои

db.createUser({
  user: "mernUser",
  pwd: "mernPass",
  roles: [{ role: "readWrite", db: "mern-todo" }]
});