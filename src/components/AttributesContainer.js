import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewAttribute } from './../actions';
import Button from 'muicss/lib/react/button';
import Attribute from './Attribute';

class AttributesContainer extends Component {
  constructor() {
    super();
    this.addNewAttribute = this.addNewAttribute.bind(this);
  }

  addNewAttribute() {
    this.props.createNewAttribute(this.props.category);
  }
  render() {
    let attributesList = null;
    if(this.props.attributes.attributeslist.length > 0){
      const attributesInCategory = this.props.attributes.attributeslist.filter((value) => {
        return value.category === this.props.category;
      });
        attributesList = attributesInCategory.map((value,key)=> {
        return <Attribute key={key} data={value} />;
      });
    }
    return (
      <section>
      <div className="Attributes-container">
        { attributesList }
      </div>
      <footer>
        <div className="New-attribute-button">
          <Button color="accent" onClick={this.addNewAttribute}>Add new attribute</Button>
         </div>
      </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attributes: state.attributes
  };
};

export default connect(mapStateToProps, { createNewAttribute })(AttributesContainer);
