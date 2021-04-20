import React from "react";
export default class GetFulltable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        users:[],
        isLoading: false,
        isError: false
      }
    }
async componentDidMount() {
  this.setState({isLoading: true})
 
  const response = await fetch("http://localhost:1300/searchcustomer/customerList")

  if(response.ok)
  {
    const users = await response.json()
      console.log(users)
      this.setState({users, isLoading:false})
    }
    else
    {
      this.setState({isError:true, isLoading:false})
    }
  }

  renderTableRows = () => {
    return this.state.users[0].map(user => {
      return (
        <tr key={user.id}>
          <td>{user.fname}</td>
          <td>{user.lname}</td>
          <td>{user.age}</td>
          <td>{user.pincode}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
          <td>{user.password}</td>
        </tr>
      )
    })
  }
renderTableHeader = () => {
    return Object.keys(this.state.users[0][0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  
  render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return users.length > 0
      ? (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <table style={{border: "3px solid black",padding: "20px 16px"}}>
          <caption style={{border: "3px solid black",padding: "20px 16px"}}><h1><b>CUSTOMER DETAILS</b></h1>
          Total records : {users[0].length}</caption>
          <thead style={{backgroundColor: "#FF416C", border: "1px solid black", color: "white"}}>
            <tr style={{border: "1px solid black", padding: "10px 8px"}}>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody style={{backgroundColor: "#ffdde1", border: "1px solid blue", textAlign: "center", padding: "10px 8px"}}>
            {this.renderTableRows()}
          </tbody>
        </table>
        </div>
      ) : (
        <div>
          No users.
      </div>
      )
  }
}
          
