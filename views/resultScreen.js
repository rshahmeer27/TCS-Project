class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
  
    componentDidMount() {
      fetch('/result/class/:id')
      .then(response => response.json())
      .then(data => this.setState({ data }));
      }
      
  
    render() {
        return(
          <>
            <h1 className='display: flex'>Result of Class: {this.state.data.classId}</h1>
            <ul>
              <li>
              Course ID
              </li>
              <li>
              Course Name
              </li>
              <li>
              Teacher Name
              </li>
              <li>
              Total Marks
              </li>
              <li>
              Obtained Marks
              </li>
            </ul>
  
              {this.state.data.map(info =>
                <ul className='display: flex'>
                  <li>
                    {this.state.data.courseId}
                  </li>
                  <li>
                      {this.state.data.courseName}
                  </li>
                  <li>
                      {this.state.data.teacherName}
                  </li>
                  <li>
                      {this.state.data.totalMarks}
                  </li>
                  <li>
                      {this.state.data.obtainedMarks}
                  </li>
                </ul>
              )}
          </>
        );
    }
  }
  
  export default App;
  