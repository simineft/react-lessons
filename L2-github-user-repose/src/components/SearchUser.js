import React, { Component } from 'react';




class SearchUser extends Component {
    state = {
        value: ''
    }



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchUser(this.state.value)

    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })


    }

    render() {

        return (
            <div>
                <div className="search-page">
                    <h2>Enter a GitHub username</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input ref="userInput" className="search-input" type="text" onChange={this.handleChange} />
                        <button className="search-user">Search</button>
                    </form>
                </div>

            </div>
        )
    }
}


export default SearchUser
