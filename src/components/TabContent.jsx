import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'muicss/lib/react/button';
import { createNewAttribute } from './../actions';
import Attr from './Attribute/Attr';

class TabContent extends Component {
  constructor() {
    super();
    this.addNewAttribute = this.addNewAttribute.bind(this);
  }

  addNewAttribute() {
    this.props.createNewAttribute(this.props.category);
  }
  render() {
    let attributesList = null;
    if (this.props.attributes.attributesList.length > 0) {
      const attributesInCategory = this.props.attributes.attributesList.filter((value) => {
        return value.category === this.props.category;
      });
      attributesList = attributesInCategory.map((value, key) => {
        return <Attr key={key} data={value} />;
      });
    }
    return (
      <section>
        <div className="Attributes-container">
          { attributesList }
        </div>
        <footer>
          <div className="New-attribute-container">
            <Button
              onClick={this.addNewAttribute}
              className="New-attribute-button"
            >
              <i className="fa fa-plus-circle" />
               Add new attribute
            </Button>
          </div>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attributes: state.attributes,
  };
};

export default connect(mapStateToProps, { createNewAttribute })(TabContent);
