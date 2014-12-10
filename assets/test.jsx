var mountNode = document.getElementById('container');
var converter = new Showdown.converter();

var ProductType = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: {product: {}}};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="productType">
      {this.state.data.product.product_type}
      </div>
    );
  }
});

React.render(<ProductType url="/products/autumn-poster.json" pollInterval={2000} />, mountNode);
