const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.qpmfcmk.mongodb.net/todoListDB`);

const itemsSchema = new mongoose.Schema ({
    task: {
        type: String,
        required: [true, "Item Missing"]
    }
});

const Item = mongoose.model("Item", itemsSchema);

const taskA = new Item ({task : "Wake Up"});
const taskB = new Item ({task : "Morning Workout"});
const taskC = new Item ({task : "Eat a Hearty Breakfast"});

const defaultTasks = [taskA,taskB,taskC];

async function saveTasks() {
  try {
    await Item.insertMany(defaultTasks);
    console.log("Successfully saved items to todoListDB");
  } catch (err) {
    console.error(err);
  }
}

app.get("/", async (req, res) => {
  try {
    const items = await Item.find({});
    if(items.length === 0){
      saveTasks();
      res.redirect("/");
    } else {
    res.render("list", {newListItems: items});
    }
  } catch (err) {
    console.error(err);
  }
});

app.post("/", async (req, res) => {
  try {
    const itemName = req.body.newItem;
    const newTask = new Item ({task : itemName});
    newTask.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
});

app.post("/delete", async (req, res) => {
  try {
    const checkedItemID = req.body.checkbox;
    await Item.findByIdAndRemove(checkedItemID);
    res.redirect('/');
    console.log("Successfully deleted check item");
  } catch (err) {
    console.error(err);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
