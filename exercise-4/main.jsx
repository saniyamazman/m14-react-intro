// Main.jsx file

// Data to pass to our List elements
var employeeData = [
    {name:"Joan", title:"developer", salary:100000},
    {name:"Enrique", title:"manager", salary:200000},
    {name:"Shana", title:"developer", salary:105000},
    {name:"Shana", title:"manager", salary:105000},
];

// Simple ListItem component for showing an <li>
var Employee = React.createClass({
    render:function() {
        return(<tr className={this.props.title}>
            <td>{this.props.name}</td>      
            <td>{this.props.title}</td>
            <td>{this.props.salary}</td>
        </tr>)
    }
});

// EmployeeTable
var EmployeeTable = React.createClass({
    render:function() {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Salary</th>
                        </tr>
                        {this.props.data.map(function(d, i){
                            return <Employee key={'employee-' + i}
                                             name={d.name}
                                             salary={d.salary}
                                             title={d.title}
                                />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});

// EmployeeSearch this contains both employee and employee table
//only going to change when someone types something in
var EmployeeSearch = React.createClass({
    getInitialState:function() {
        return({searchString:''}); //1when someone types something
    },
    // Add a filter funciton
    filter:function(event){
        var whatever = event.target.value;  //3we get the value out of that input box
        this.setState({searchString:whatever});
    },

    render:function() { //4then we rerender
        var employees = this.props.data.filter(function(d){
            return d.name.match(
                this.state.searchString)
            }.bind(this));

        // var employees = this.props.data.filter(function(d) => d.name.match(this.state.searchString));

        // Use this.state.searchString to filter down the `employees` array
        

        //2when someone types something in the input theres a change in the input box
        //5 then we pass all the info to the employeetable
        return(
            <div>
                <input placeholder="Search employees" onChange={this.filter}/> 
                <EmployeeTable data={employees}/>
            </div>
        )
    }
});


// Render your component in the `main` section
ReactDOM.render(<EmployeeSearch data={employeeData}/>,
    document.querySelector('main')
);
