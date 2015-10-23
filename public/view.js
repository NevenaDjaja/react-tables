var React = require('react');
var ReactDOM = require('react-dom');

var Table = require('reactabular').Table;

var Mytable = React.createClass({
  displayName: 'EditorsTable',
  getInitialState() {
    return {
      data: [
        {
          country: 'USA',
          city: 'San Francisco',
          time: '2012-present'
        },
        {
          country: 'USA',
          city: 'Atlanta',
          time: '2011-2012'
        },
        {
          country: 'USA',
          city: 'New York',
          time: '2011'
        },
        {
          country: 'Germany',
          city: 'Munich',
          time: '2009-2010'
        },
        {
          country: 'Spain',
          city: 'Madrid',
          time: '2008-2009'
        },
        {
          country: 'Austria',
          city: 'Graz',
          time: '2003-2008',
        }
      ],
      columns: [
        {
          property: 'country',
          header: 'Country'
        },
        {
          property: 'city',
          header: 'City'
        },
        {
          property: 'time',
          header: 'Time'
        }
      ],
    };
  },

  render() {
    var columns = this.state.columns || [];
    var data = this.state.data || [];

    return (
        <Table className="mytable"
            columns={columns}
            data={data} />
    );
  },
});

ReactDOM.render(
  <Mytable />,
  document.getElementById('data-table')
)