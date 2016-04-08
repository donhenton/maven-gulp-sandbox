var React = require('react');
module.exports = React.createClass(
        {
        
        render: function()
        {
        return  <div> 
                 <h6>{this.props.title}</h6>
                  <div>{this.props.text}</div>
                 </div>
        } 
        
        });
