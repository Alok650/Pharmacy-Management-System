import React from "react";

export default class GetshelfLife extends React.Component {

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
 
  const response = await fetch("http://localhost:1300/medicines/stock/shelfLife")

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
    return this.state.users.map(user => {
      if(user.shelf_life_month<0 || user.shelf_life_year<0) {
        return (
          <tr key={user.id}>
          <td>{user.sr_no}</td>
          <td>{user.med_name}</td>
          <td style = {{color:"red"}}> <b>EXPIRED! </b></td>
        </tr>
        )
      }
      else{
      return (
        <tr key={user.id}>
        <td>{user.sr_no}</td>
        <td>{user.med_name}</td>
        <td>{user.shelf_life_year} year and {user.shelf_life_month} months </td>
      </tr>
      )
      }
    })
  }
renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
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
        <table style={{border: "3px solid black",padding: "20px 16px"}}>
          <caption style={{border: "3px solid black",padding: "20px 16px"}}><h1><b>MEDICINES SORTED BY QUANTITY LEFT</b></h1>
          Total records : {users.length}</caption>
          <thead style={{backgroundColor: "#FF416C", border: "1px solid black", color: "white", padding: "10px 8px"}}>
            <tr style={{border: "1px solid black", padding: "10px 8px"}}>
              {/* {this.renderTableHeader()} */}
              <th> sr_no</th>
              <th> med_name</th>
              <th> shelf life</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor: "#ffdde1", border: "1px solid blue", textAlign: "center", padding: "10px 8px"}}>
            {this.renderTableRows()}
          </tbody>
        </table>
      ) : (
        <div>
          No users.
      </div>
      )
  }
}
          
