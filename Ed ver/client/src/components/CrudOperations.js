import React, { Component } from "react";
import axios from "axios";

class CrudOperations extends Component {
  state = {
    title: "Full Stack MERN Application",
    act: 0,
    index: "",
    datas: [],
  };
  

  /*
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => console.log(res.data));
  };
*/

  componentDidMount() {
    /**
     * Get Request
     */

    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        console.log(res);
        this.setState({ datas: res.data });
      })
      .catch((err) => console.error(err));

    /**
     * Post Request
     */
  /*  axios
      .post("http://localhost:5000/posts", {
        title: "Title from react",
        description: "Hello from React",
      })
      .then((res) => {
        console.log(res);
        this.setState({ datas: res.data });
      })
      .catch((err) => console.error(err));*/
    /**
     * Put/Patch Request
     *** Put:  method of modifying resource
     *** Patch: applies a partial update to the resource
     */
   /* axios
      .patch("http://localhost:5000/posts/5f462059c14b210151b5338f", {
        title: "Title from react11",
      })
      .then((res) => {
        console.log(res);
        this.setState({ datas: res.data });
      })
      .catch((err) => console.error(err));*/

    /**
     * Delete Request
     */
  /*  axios
      .delete("http://localhost:5000/posts/5f462059c14b210151b5338f")
      .then((res) => {
        console.log(res);
        this.setState({ datas: res.data });
      })
      .catch((err) => console.error(err));*/

    //this.refs.name.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    console.log("try");
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let description = this.refs.description.value;

    if (this.state.act === 0) {
      //New

      let data = {
        name,
        description,
      };

      datas.push(data);
    } else {
      let index = this.state.index;
      datas[index].name = name;
      datas[index].description = description;
    }

    this.setState({
      datas,
      act: 0,
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({ datas });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.description.value = data.description;

    this.setState({
      act: 1,
      index: i,
    });

    this.refs.name.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <>
        <h2>{this.state.title} </h2>
        <form ref="myForm">
          <label>
            Person Name:
            <input
              type="text"
              name="name"
              ref="name"
              placeholder="Person Name"
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            Description:
            <input
              type="text"
              name="description"
              ref="description"
              placeholder="Description"
            />
          </label>
          <button type="submit" onClick={this.fSubmit}>
            Add
          </button>
        </form>

        <pre>
          {datas.map((data, i) => (
            <li key={i}>
              {i + 1}. {data.name} : {data.description}
              <button onClick={() => this.fRemove(i)}>Remove</button>
              <button onClick={() => this.fEdit(i)}>Edit</button>
            </li>
          ))}
        </pre>
      </>
    );
  }
}

export default CrudOperations;

/**
 * Other Version.... to look at later
 */

/**
 * import React, { Component } from "react";
import axios from "axios";

class CrudOperations extends Component {
  state = {
    name: [],
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => console.log(res.data));
  };

  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res);
      this.setState({ users: res.data });
    });

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default CrudOperations;
 */
