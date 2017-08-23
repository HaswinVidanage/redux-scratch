var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TestHeader = React.createClass({
  render: function () {
    var {dispatch, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <label>
            <h5>{searchText}</h5>
          </label>
        </div>
      </div>
    )
  }
});

// export default connect(
//   (state) => {
//     return {
//       showCompleted: state.showCompleted,
//       searchText: state.searchText
//     }
//   }
// )(TestSearch);

export default connect(
  (state) => {
    return state;
  }
)(TestHeader);
