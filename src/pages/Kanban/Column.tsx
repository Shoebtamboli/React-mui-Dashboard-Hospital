import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { useStore } from "../../store/kanbanStore";
import Task from "./Task";
import { useState } from "react";
import { shallow } from "zustand/shallow";
import { IconButton } from "@mui/material";
import { green } from "@mui/material/colors";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Column({ state }: any) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore(
    (store) => store.tasks.filter((task: any) => task.state === state),
    shallow
  );
  console.log(tasks);
  const addTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);
  const deleteTask = useStore((store) => store.deleteTask);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    addTask(text, state);
    setText("");
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: green[100],
        height: "100vh",
        color: "#fff",
        width: "34%",
        //maxWidth: "20rem",
        margin: "0 0.5rem",
        borderRadius: " 4px",
        padding: "0.5rem"
      }}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={(e) => {
        setDrop(false);
        moveTask(draggedTask, state);
        setDraggedTask(null);
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          color: "black",
          backgroundColor: "white",
          p: 1,
          mb: 2,
          borderRadius: 2,
          //height: "fit-content",
          cursor: "pointer"
        }}
      >
        <Typography variant="h6">{state}</Typography>
        <Tooltip title="Add task">
          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      {tasks.map((task: any, index: any) => (
        <Task id={task.id} title={task.title} key={index} /> // Pass the id prop to Task component
      ))}
      {open && (
        <Dialog
          maxWidth="xs"
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          fullWidth
          sx={{ height: "100%" }}
        >
          <DialogTitle>Add a task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Task"
              type="task"
              fullWidth
              minRows={3}
              multiline
              variant="outlined"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleAdd}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}
