import classnames from 'classnames';
import * as React from 'react';

interface SquareProps {
  isWinner?: boolean;
  index: number;
  onClick(index: number): void; // Void return type means this function does not return a value.
  value: React.ReactNode; // A ReactNode can be any type that is valid as a React child.
}

export class Square extends React.Component<SquareProps> {
  onClick = (): void => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <button
        className={classnames('square', {
          winner: this.props.isWinner,
        })}
        onClick={this.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
