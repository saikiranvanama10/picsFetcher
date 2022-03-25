import React from "react";

class SearchBar extends React.Component {

    state = {
        term: ''
    };

    onSubmit (event) {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    onChange(event) {
        //console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={e => this.onSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type='text'
                               placeholder="Search..."
                               value={this.state.term}
                               onChange={event => this.setState({term: event.target.value})}
                               //onChange={this.onChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;