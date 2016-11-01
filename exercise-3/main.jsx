// Main.jsx file

// Data to pass into our parent component
var employeeData = [
    {name:"Joan", title:"developer", salary:100000},
    {name:"Enrique", title:"manager", salary:200000},
    {name:"Shana", title:"developer", salary:105000},
    {name:"Shana", title:"manager", salary:105000},
];

// Create an EmployeeRow element to render a row of information for an employee
//<tr> makes a table for the employeeData table
//<td> 
var EmployeeRow = React.createClass({
    render:function(){
        return(
            <tr> 
                <td className={'name'}> {this.props.name} </td>
                <td>{this.props.title}</td>
                <td>{this.props.salary}</td>
            </tr>)
    }
    // Define rendering function
});

// Create an EmployeeTable element in which to render your EmployeeRows
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
                        {
                        // Enter employee rows here!!!!
                        this.props.employeeData.map(function(data, index){
                            return <EmployeeRow key={index} name={data.name} title={data.title}
                            salary={data.salary}/> 
                        })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
});

// Render your component in the `main` section

ReactDOM.render(<EmployeeTable employeeData={employeeData}/>, //this line returns values from employeeData
    document.querySelector('main')
    );
