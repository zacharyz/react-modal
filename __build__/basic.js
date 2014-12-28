webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(2);
	var Modal = __webpack_require__(1);

	var appElement = document.getElementById('example');

	Modal.setAppElement(appElement);
	Modal.injectCSS();

	var App = React.createClass({displayName: 'App',

	  getInitialState: function() {
	    return { modalIsOpen: false };
	  },

	  openModal: function() {
	    this.setState({modalIsOpen: true});
	  },

	  closeModal: function() {
	    this.setState({modalIsOpen: false});
	  },

	  handleModalCloseRequest: function() {
	    // opportunity to validate something and keep the modal open even if it
	    // requested to be closed
	    this.setState({modalIsOpen: false});
	  },

	  handleInputChange: function() {
	    this.setState({foo: 'bar'});
	  },

	  render: function() {
	    return (
	      React.DOM.div(null, 
	        React.DOM.button({onClick: this.openModal}, "Open Modal"), 
	        Modal({
	          closeTimeoutMS: 150, 
	          isOpen: this.state.modalIsOpen, 
	          onRequestClose: this.handleModalCloseRequest
	        }, 
	          React.DOM.h1(null, "Hello"), 
	          React.DOM.button({onClick: this.closeModal}, "close"), 
	          React.DOM.div(null, "I am a modal"), 
	          React.DOM.form(null, 
	            React.DOM.input({onChange: this.handleInputChange}), 
	            React.DOM.input(null), 
	            React.DOM.input(null), 
	            React.DOM.input(null), 
	            React.DOM.input(null), 
	            React.DOM.br(null), 
	            React.DOM.button(null, "hi"), 
	            React.DOM.button(null, "hi"), 
	            React.DOM.button(null, "hi"), 
	            React.DOM.button(null, "hi")
	          )
	        )
	      )
	    );
	  }
	});

	React.renderComponent(App(null), appElement);


/***/ }
]);