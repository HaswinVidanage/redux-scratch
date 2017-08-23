var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TestSearch = React.createClass({
  render: function () {
    var {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>

      </div>
    )
  }
});



export default connect(
  (state) => {
    return {
      searchText: state.searchText
    }
  }
)(TestSearch);
