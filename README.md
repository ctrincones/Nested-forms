###Nested forms app

Form that can manage an attributes list and displays the output in JSON format live built with React-Redux

####Installation
Clone this repository and branch: git clone -b t-comb-branch https://github.com/ctrincones/Nested-forms.git

Install project dependencies: npm install
Start development server: npm start

####Features

-The form has a fake save button that will get disabled if:
• One of the attributes name is duplicated among them.
• One of the attribute component is invalid

-The form has Tabs for each of the attributes categories

Categories are static and only to allow the user to easily recognize the
attributes.

Internally all the attributes belong to the same list but each one has a property that allows the tab to render attributes, which belong to the tab’s category.

-The Attributes list has an add attribute button to dynamically add attributes in the current selected category.

-Each attribute can be removed with a delete icon within the component.

-The Attribute component encapsulates validation, logic and controls the form’s save button when an attribute is invalid by dispatching an actions that creates a new error in the application state handled by Redux.

The attribute has all the following properties:

• Name: is required and has to be Unique across all the attributes

• Description

• Device Resource Type: always disabled.

• Default Value

• Data Type

• Format

<b>Data Type: String</b>

Formats: None, Number, Boolean, Date-Time, CDATA and URI

• When “none” is selected it activates an enumerated list of strings.

Enumerations input is able to add values to the attribute

Empty enumerated values cant be added to the list

• When “number” is selected it activates a ranged set of values.

Range min/max has to be valid (min cant be gt max, max can be lt min) and these can be either float or integer values. Both are required.

Precision is the step factor between the defined ranges; its value has to allow the user to go through min to max and not exceed it. Required.

Accuracy acts the same than Precision.

• When “Boolean”, “Data-type”, “URL” there’s no custom behavior.

<b>Data Type: Object</b>

• Default Value is disabled

• Format is disabled.







