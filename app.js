const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");
const { argv } = require("yargs");
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Kuch bhi",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler() {
    notes.readNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "Listing a note",
  handler() {
    notes.listNotes();
  },
});
yargs.parse();
