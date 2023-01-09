import React, {useRef} from 'react';
    
export default function App () {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const FileUploader = ({onFileSelect}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
      // handle validations
      const file = e.target.files[0];
      if (file.size > 1024)
        onFileSelectError({ error: "File size cannot exceed more than 1MB" });
      else onFileSelectSuccess(file);
    }
  }

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);
  
    axios
      .post('/addassignment', formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FileUploaded
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}