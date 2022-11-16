import { useState } from "react";
import { Card } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["JPEG", "PNG", "GIF"];

 function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <Card className="mt-4">
      <h1 className="mx-4"> Drag & Drop Files</h1>
      <Card.Body className="d-flex justify-content-center file-card">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
      <p>{file ? `File name: ${file[0].name}` : "No files uploaded yet"}</p>
      </Card.Footer>
    </Card>
  );
}
export default DragDrop;