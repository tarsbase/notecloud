import React from 'react';
import TagIndexItem from './tag_index_item';

export default class TagIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getAllTags();
  }

  render() {
    console.log(this.props.tags);
    return <div>
        <div>Tag Index</div>
        <div>{}</div>
      </div>;
  }
}