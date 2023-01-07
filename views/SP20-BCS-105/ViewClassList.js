import React from 'react';

class ListView extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

export default ListView;