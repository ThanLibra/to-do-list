import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class BreadcrumbsMain extends Component {
    constructor(props) {
        super(props);
        this.renderBreadcrumbs = this.renderBreadcrumbs.bind(this);
    }

    componentDidMount() {
        const { category } = this.props.data;
    }

    renderBreadcrumbs() {
        return (
            <div>
                breadcrumbs
            </div>
        );
    }

    render() {
        return <Route render={this.renderBreadcrumbs} />;
    }

}

function mapStateToProps(state) {
    return {
      data: {
        messages: state.messages
      },
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        category: bindActionCreators(categoryActions, dispatch),
      },
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withNamespaces()(BreadcrumbsMain));