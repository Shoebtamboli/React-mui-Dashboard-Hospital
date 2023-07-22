import { useStore } from "../../store/kanbanStore";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";

export default function Task({ id, title }: any) {
  const task = useStore((store) =>
    store.tasks.find((task: any) => task.id === id)
  );
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const deleteTask = useStore((store) => store.deleteTask);

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <Box
      key={id} // Set the unique identifier as the key
      sx={{
        backgroundColor: "white",
        borderRadius: "4px",
        minHeight: "5rem",
        color: "black",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mb: "0.5rem",
        cursor: "move"
      }}
      draggable
      onDragStart={() => setDraggedTask(id)}
    >
      <Typography variant="h6" gutterBottom>
        {task.title}
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        {task.state === "PLANNED" && (
          <Chip
            label={task.state}
            variant="filled"
            color="secondary"
            sx={{
              textTransform: "uppercase"
            }}
          />
        )}
        {task.state === "ONGOING" && (
          <Chip
            label={task.state}
            variant="filled"
            color="info"
            sx={{
              textTransform: "uppercase"
            }}
          />
        )}
        {task.state === "VALIDATION" && (
          <Chip
            label={task.state}
            variant="filled"
            color="warning"
            sx={{
              textTransform: "uppercase"
            }}
          />
        )}
        {task.state === "COMPLETED" && (
          <Chip
            label={task.state}
            variant="filled"
            color="success"
            sx={{
              textTransform: "uppercase"
            }}
          />
        )}
      </Stack>
    </Box>
  );
}
