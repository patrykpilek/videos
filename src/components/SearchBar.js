import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        if (this.state.term.trim().length) {
            this.props.onFormSubmit(this.state.term);
        }
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="video_search">Video Search</label>
                        <input type="text" id="video_search" value={ this.state.term } onChange={ this.onInputChange }/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;