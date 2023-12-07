"use  client"
const Show = (props) => {
    const {
        tasks,
        settasks,
        settitle,
        setdescription,
        setstatus,
        setactivetask
    } = props

    const UpdateHandler = (index)=>{
        const {title,description,status} = tasks[index]
        settitle(title)
        setdescription(description)
        setstatus(status)
        setactivetask(index)
      }
    const deletehandler = (index)=>{
        const copytasks = [...tasks]
        copytasks.splice(index,1)
        settasks(copytasks)
    }
    var tasklist = (<h1 className="ms-5">loading.....</h1>)
    if (tasks.length > 0) {
      tasklist = tasks.map((task,index)=>{
          return(
              <div key={index} className="card  mb-3 ms-5" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{task.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                          {task.status}
                        </h6>
                        <p className="card-text">
                            {task.description}
                        </p>
                        <button onClick={()=>{UpdateHandler(index)}} className="me-2 btn btn-sm   btn-dark">
                            Update Task
                        </button>
                        <button onClick={()=>{deletehandler(index)}} className="btn btn-sm btn-dark">
                            Delete Task
                        </button>
                    </div>
                </div>
          )
      })
      
    }
    return(
      <div className="d-flex flex-wrap">{tasklist}</div>
    )  
}

export default Show