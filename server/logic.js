const db = require("./users");

const allEmployees = () => {
  return db.UserModel.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        employees: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "Employees not found",
      };
    }
  });
};
//add employees
const addEmployees = (name, email, age, address, designation) => {
  return db.UserModel.findOne({ email }).then((result) => {
    if (result) {
      return {
        statusCode: 400,
        message: "Employee already exists",
      };
    } else {
      const newEmployee = new db.UserModel({
        name,
        email,
        age,
        address,
        designation,
      });
      newEmployee.save();
      return {
        statusCode: 200,
        message: "Employee sucessfully added",
        data: { name, email, age, address, designation },
      };
    }
  });
};

const editEmployees = (id, name, email, age, address, designation) => {
  console.log(id, name);
  return db.UserModel.findOne({ email }).then((result) => {
    console.log(result);
    if (result) {
      (result.name = name),
        (result.email = email),
        (result.age = age),
        (result.address = address),
        (result.designation = designation),
        result.save();
      return {
        statusCode: 200,
        message: "Employee details edited sucessfullt",
      };
    }
  });
};

//delete employees
const deleteEmployees = (id) => {
  return db.UserModel.findByIdAndDelete({ _id: id }).then((result) => {
    return {
      statusCode: 200,
      message: "Deleted sucessfully",
    };
  });
};
module.exports = {
  allEmployees,
  addEmployees,
  editEmployees,
  deleteEmployees,
};
